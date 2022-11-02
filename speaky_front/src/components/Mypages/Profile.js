import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../Mainpage/Navbar.js';
import './Study.css';
const formData = new FormData();

const Topbox = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: beige;
  display: flex;
  margin-top: 50px;
  overflow: hidden;
`;

const Profilebox = styled.div`
  min-width: 500px;
  min-height: 200px;
  background-color: pink;
  margin: 0 auto;
  display: flex;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Profilepic = styled.div`
  min-width: 200px;
  min-height: 200px;
  background-color: skyblue;
`;

const Input = styled.input`
  padding-bottom: 130px;
  /* margin-top: 40px; */
`;

const Profilename = styled.div`
  min-width: 200px;
  min-height: 200px;
  /* background-color: blue; */
`;

const Name = styled.h5`
  margin-top: 70px;
`;

const Nation = styled.h5``;

const Age = styled.h5``;

const Introduction = styled.h5``;

const Profile = styled.a`
  padding: 0 2vw;
  margin-right: 70px;
  background-color: aliceblue;
  text-decoration: none;
  color: black;
  border-radius: 10px;
`;

const Account = styled.a`
  padding: 0 2vw;
  background-color: aliceblue;
  text-decoration: none;
  color: black;
  border-radius: 10px;
`;

const Savebtn = styled.button`
  height: 40px;
  padding: 0 1vw;
  background-color: aliceblue;
  border: 1px solid gray;
  border-radius: 10px;
  float: right;
  margin-top: 10px;
`;

const Select = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 5vw;
`;

//***********************************************************************************8 */

const MainProfile = styled.div`
  width: 900px;
  height: 400px;
  margin: 0 auto;
  margin-top: 3vw;

  @media only screen and (max-width: 900px) {
    width: 100%;
    margin-top: 8vw;
  }
`;

const Modify = styled.div`
  width: 100%;
  min-width: 100%;
  height: 60px;
  margin-bottom: 2vw;
  border-bottom: 1px solid #c8c8c8;
`;

const Word = styled.p`
  float: left;
  line-height: 60px;

  @media only screen and (max-width: 830px) {
    margin: 0;
  }
`;

const Inputbox = styled.input`
  margin-top: 15px;
  height: 30px;
  width: 20vw;
  margin-left: 220px;
  border-radius: 10px;
  border: 1px solid gray;
  padding-left: 7px;

  ::placeholder {
    color: gray;
    font-size: 15px;
  }

  :focus {
    outline-color: skyblue;
  }
  @media only screen and (max-width: 900px) {
    margin-left: 65px;
    width: 50vw;
  }
`;

const NationInput = styled.input`
  margin-top: 15px;
  height: 30px;
  width: 20vw;
  margin-left: 181px;
  border-radius: 10px;
  border: 1px solid gray;
  padding-left: 7px;

  ::placeholder {
    color: gray;
    font-size: 15px;
  }

  :focus {
    outline-color: skyblue;
  }
  @media only screen and (max-width: 900px) {
    margin-left: 32px;
    width: 50vw;
  }
`;

const EmailInput = styled.input`
  margin-top: 15px;
  height: 30px;
  width: 20vw;
  margin-left: 200px;
  border-radius: 10px;
  border: 1px solid gray;
  padding-left: 7px;

  ::placeholder {
    color: gray;
    font-size: 15px;
  }

  :focus {
    outline-color: skyblue;
  }
  @media only screen and (max-width: 900px) {
    margin-left: 47px;
    width: 50vw;
  }
`;

const PwInput = styled.input`
  margin-top: 15px;
  height: 30px;
  width: 20vw;
  margin-left: 150px;
  border-radius: 10px;
  border: 1px solid gray;
  padding-left: 7px;

  ::placeholder {
    color: gray;
    font-size: 15px;
  }

  :focus {
    outline-color: skyblue;
  }
  @media only screen and (max-width: 900px) {
    margin-left: 32px;
    width: 50vw;
  }
`;
export default function Study() {
  const img = useRef();
  const id = useRef();
  const nickname = useRef();
  const nation = useRef();
  const email = useRef();
  const pw = useRef();
  const text = useRef();

  const [lookimg, setLookimg] = useState('');
  const [lookid, setLookid] = useState('');
  const [looknickname, setLookNickName] = useState('');
  const [looknation, setLookNation] = useState('');
  const [lookemail, setLookEmail] = useState('');
  const [lookpw, setLookpw] = useState('');
  const [looktext, setLookText] = useState('');

  async function imgHandler(e) {
    formData.append('img', e.target.files[0]);
  }

  async function saveHandler(id, pw, email, nickname, nation, text) {
    const resImg = await fetch('http://localhost:4000/mypage/setimg', {
      method: 'POST',
      headers: {},
      body: formData,
    });

    const imgName = await resImg.json();

    const res = await fetch('http://localhost:4000/mypage/setdata', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        pw,
        email,
        nickname,
        text,
        nation,
        img: imgName,
      }),
    });

    const result = await res.json();
    if (result === '내 정보 수정 완료') {
      alert('수정 완료');
    } else {
      alert('통신 오류');
    }
  }

  useEffect(() => {
    fetch('http://localhost:4000/mypage/', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLookid(res.id);
        setLookpw(res.pw);
        setLookEmail(res.email);
        setLookNickName(res.nickname);
        setLookNation(res.nation);
        setLookimg(res.img);
        setLookText(res.text);
        nickname.current.value = res.nickname;
        nation.current.value = res.nation;
        pw.current.value = res.pw;
        text.current.value = res.text;
      });
  }, []);

  return (
    <>
      <Navbar />
      <Topbox>
        <Profilebox>
          <Profilepic>
            <Input type="file" ref={img} onChange={imgHandler} />
            {lookimg}
          </Profilepic>
          <Profilename>
            <Name>이름 : {looknickname} </Name>
            <Nation>국가 : {looknickname} </Nation>
            <Introduction>자기소개 : {looktext} </Introduction>
          </Profilename>
        </Profilebox>
      </Topbox>

      <Select>
        <Profile href="#">학생 프로필</Profile>
        <Account href="#">계정 설정</Account>
      </Select>

      <MainProfile>
        <Modify>
          <Word>아이디</Word>
          <EmailInput value={lookid} />
          <Savebtn
            onClick={() => {
              saveHandler(id.current.value);
            }}
          >
            저장
          </Savebtn>
        </Modify>

        <Modify>
          <Word>이메일</Word>
          <EmailInput value={lookemail} />

          <Savebtn
            onClick={() => {
              saveHandler(email.current.value);
            }}
          >
            저장
          </Savebtn>
        </Modify>

        <Modify>
          <Word>이름</Word>
          <Inputbox placeholder="Name" ref={nickname} />
          <Savebtn
            onClick={() => {
              saveHandler(nickname.current.value);
            }}
          >
            저장
          </Savebtn>
        </Modify>

        <Modify>
          <Word>거주 국가</Word>
          <NationInput placeholder="Nation" ref={nation} />
          <Savebtn
            onClick={() => {
              saveHandler(nation.current.value);
            }}
          >
            저장
          </Savebtn>
        </Modify>

        <Modify>
          <Word>비밀번호 변경</Word>
          <PwInput placeholder="Password" type="password" ref={pw} />
          <Savebtn
            onClick={() => {
              saveHandler(pw.current.value);
            }}
          >
            저장
          </Savebtn>
        </Modify>

        <Modify>
          <Word>자기 소개</Word>
          <NationInput placeholder="Introduce" ref={text} />
          <Savebtn
            onClick={() => {
              saveHandler(text.current.value);
            }}
          >
            저장
          </Savebtn>
        </Modify>
      </MainProfile>
    </>
  );
}
