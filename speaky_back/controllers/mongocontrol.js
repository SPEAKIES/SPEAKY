const mongoClient = require('../routes/mongo');
const _user = mongoClient.connect();
const crypto = require('crypto');

//해시 암호화
const createHashedPassword = (password) => {
  const salt = crypto.randomBytes(64).toString('base64');
  const hashedPassword = crypto
    .pbkdf2Sync(password, salt, 10, 64, 'sha512')
    .toString('base64');
  return { hashedPassword, salt };
};

const verfiyPassword = (password, salt, userPassword) => {
  const hashed = crypto
    .pbkdf2Sync(password, salt, 10, 64, 'sha512')
    .toString('base64');
  if (hashed === userPassword) return true;
  return false;
};

//로그인
const mongoDB = {
  SetId: async (id, pw) => {
    const user = await _user;
    const db = user.db('project').collection('user');
    const result = await db.findOne({ id });
    const passwordresult = verfiyPassword(pw, result.salt, result.pw);
    // 해시함수 맞추기
    if (passwordresult) {
      return { result: true, id: result.id, email: result.email };
    } else {
      return '로그인 실패';
    }
  },
  //회원가입
  IncId: async (id, pw, email) => {
    const user = await _user;
    const db = user.db('project').collection('user');
    const duplicated = await db.findOne({ id });
    const passwordresult = createHashedPassword(pw);
    if (duplicated === null) {
      const result = await db.insertOne({
        id,
        pw: passwordresult.hashedPassword,
        email,
        salt: passwordresult.salt,
      });
      if (result.acknowledged) {
        return '회원가입 완료';
      }
    }
    if (duplicated) {
      return {
        duplicated: true,
        msg: '중복 회원 존재',
      };
    } else {
      throw new Error('통신 이상');
    }
  },
  //마이페이지
  SetData: async (data) => {
    const user = await _user;
    const db = user.db('project').collection('user');
    const duplicated = await db.findOne({ id: data.id }); //session.id
    if (duplicated) {
      const result = await db.updateOne(
        { id: data.id }, //session.id front쪽에서 redux처리를 통해서 해당 data에 user.id값이 들어오기 떄문에 로직 사용 가능
        {
          $set: {
            email: data.email,
            nickname: data.nickname,
            nation: data.nation,
            text: data.text,
            img: data.img,
          },
        }
      );
      return '내 정보 수정 완료';
    }
  },

  Getmypage: async (data) => {
    const user = await _user;
    const db = user.db('project').collection('user');
    const duplicated = await db.findOne({ email: data.userEmail });
    return duplicated;
  },

  // 예약 페이지
  SetReservation: async (data) => {
    const user = await _user;
    const db = user.db('project').collection('reserve');
    const duplicated = await db.findOne({ time: data.value });
    if (duplicated) {
      return '이미 예약된 시간입니다.';
    } else {
      const result = await db.insertOne({
        id: data.id,
        date: {
          year: data.year,
          month: data.month,
          day: data.day,
          hour: data.hour,
          minute: data.minute,
        },
        time: data.value,
      });

      if (result.acknowledged) {
        return '예약이 완료 되었습니다';
      } else {
        return new Error('서버 이상');
      }
    }
  },
  GetReservation: async () => {
    const user = await _user;
    const db = user.db('project').collection('reserve');
    const reserveCursor = db.find({});
    const reserveData = await reserveCursor.toArray();
    return reserveData;
  },
};

module.exports = { mongoDB, verfiyPassword };
