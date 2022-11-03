const initState = {
  FollowListData: [
    { userName: '강한솔', userImage: '경로' },
    { userName: '모승환', userImage: '경로' },
    { userName: '이민정', userImage: '경로' },
    { userName: '천해성', userImage: '경로' },
  ],
  checkListdata: ['한국어', '영어', '중국어', '일본어'],
  communityListdata: [
    {
      userId: 'a',
      userName: '강한솔',
      userComment: '나 코딩 제일잘함',
      language: '영어',
    },
    {
      userId: 'b',
      userName: '모승환',
      userComment: '안녕하세요 요새 FPS게임 재밌다... 취업하고 싶다..',
      language: '일본어',
    },
    {
      userId: 'c',
      userName: '이민정',
      userComment: '오버워치 장인',
      language: '영어',
    },
    {
      userId: 'd',
      userName: '천해성',
      userComment: '네카라쿠배당토',
      language: '한국어',
    },
  ],
  profiledata: {
    userName: '모승환',
    userIntroduce: '안녕하세요 저는 aaa입니다',
    userEmail: 'asd@naver.com',
    userPhone: '010-000-0000',
    userLanguage: '한국어',
    userGender: '남',
    userImage: '이미지 경로',
  },
  chatdata: [
    {
      userId: 'A',
      userName: '모승환',
      userImage: '유저이미지',
      userMessage: '일본 재밌으셨나요 부럽당...',
      userMessageDate: '오전 12:31',
    },
    {
      userId: 'B',
      userName: '강한솔',
      userImage: '유저이미지',
      userMessage: '네 ㅎㅎ ',
      userMessageDate: '오전 12:33',
    },
  ],
};

// 액션 타입(문자열)
const INIT = 'community/INIT';
const PROFILEINIT = 'community/PROFILEINIT';
const MESSAGEINIT = 'community/MESSAGEINIT';

// 액션 생성 함수
// payload -> 선택에 다른 결과 값 result 전달 필요
export function init(data) {
  return {
    type: INIT,
    payload: data,
  };
}
export function profileInit(data) {
  return {
    type: PROFILEINIT,
    payload: data,
  };
}
export function messageInit(data) {
  return {
    type: MESSAGEINIT,
    payload: data,
  };
}

//리듀서
// 리듀서
export default function community(state = initState, action) {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        FollowListData: action.payload.FollowListData,
        checkListdata: action.payload.checkListdata,
        communityListdata: action.payload.communityListdata,
      };
    case PROFILEINIT:
      return {
        ...state,
        profiledata: action.payload,
      };
    case MESSAGEINIT:
      return {
        ...state,
        chatdata: [...state.chatdata, action.payload],
      };

    default:
      return state;
  }
}
