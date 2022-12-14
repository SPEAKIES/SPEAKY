import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../Header.js';
import './Study.css';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Link, useNavigate, redirect } from 'react-router-dom';
import { login, userUpdate } from '../../store/modules/user.js';

const formData = new FormData();

const Topbox = styled.div`
  width: 80%;
  min-height: 250px;
  display: flex;
  margin: 0 auto;
  margin-top: 5vw;
  overflow: hidden;
  border-bottom: 1px solid #c8c8c8;
`;

const Profilebox = styled.div`
  min-width: 500px;
  min-height: 200px;
  margin: 0 auto;
  display: flex;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  margin-top: 10.2vw;
  width: 5vw;
  margin-left: 3.7vw;
  margin-right: 5vw;
  position: absolute;
  z-index: 2;
  opacity: 0;
`;

const Profilename = styled.div`
  min-width: 200px;
  min-height: 200px;
  margin-left: 3vw;
  margin-top: 3vw;
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

const Word = styled.div`
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
export default function Mypage() {
  const userImg = useRef();
  const id = useRef();
  const userName = useRef();
  const nation = useRef();
  const email = useRef();
  const text = useRef();
  const state = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [lookuserImg, setLookuserImg] = useState('');
  const [lookid, setLookid] = useState('');
  const [lookuserName, setLookUserName] = useState('');
  const [looknation, setLookNation] = useState('');
  const [lookemail, setLookEmail] = useState('');
  const [looktext, setLookText] = useState('');
  const [imgOk, setImgOk] = useState(false);

  async function imgHandler(e) {
    formData.append('img', e.target.files[0]);
    setImgOk(true);
  }

  async function saveHandler() {
    if (
      id.current?.value &&
      userName.current?.value &&
      text.current?.value &&
      email.current?.value &&
      nation.current?.value &&
      imgOk
    ) {
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
          id: id.current.value,
          email: email.current.value,
          userName: userName.current.value,
          text: text.current.value,
          nation: nation.current.value,
          userImg: imgName,
        }),
      });

      const result = await res.json();

      if (result) {
        alert('?????? ??????');
        const userInfo = {
          email: email.current.value,
          id: id.current.value,
          userName: userName.current.value,
          text: text.current.value,
          nation: nation.current.value,
          userImg: imgName,
        };
        navigate('/');
        dispatch(userUpdate(userInfo));
      } else {
        alert('?????? ??????');
      }
    }
  }

  useEffect(() => {
    fetch('http://localhost:4000/mypage', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userEmail: state.userEmail,
        id: state.id,
        userName: state.userName,
        userImg: state.userImg,
        text: state.text,
        nation: state.nation,
      }),
    });
    console.log(userImg);
  }, []);
  console.log(state);
  return (
    <>
      <Header />
      <Topbox>
        <Profilebox>
          <Avatar
            alt="Remy Sharp"
            src={`http://localhost:4000/images/${state.userImg}`}
            sx={{
              width: '150px',
              height: '150px',
              marginLeft: '2vw',
              marginTop: '2vw',
            }}
          />
          <Input type="file" ref={userImg} onChange={imgHandler} />
          <Button
            variant="contained"
            sx={{
              textAlign: 'center',
              height: '2.2vw',
              position: 'absolute',
              marginLeft: '3vw',
              marginTop: '10vw',
              padding: '10px 10px',
              borderRadius: '20px',
            }}
          >
            ????????? ?????????
          </Button>
          <Profilename>
            <Name>?????? : {state.userName} </Name>
            <Nation>?????? : {state.nation} </Nation>
            <Introduction>???????????? : {state.text} </Introduction>
          </Profilename>
        </Profilebox>
      </Topbox>
      <Select>
        <Account>?????? ??????</Account>
      </Select>

      <MainProfile>
        <Modify>
          <Word>?????????</Word>
          <EmailInput defaultValue={state.id} ref={id} />
        </Modify>

        <Modify>
          <Word>?????????</Word>
          <EmailInput defaultValue={state.userEmail} ref={email} />
        </Modify>

        <Modify>
          <Word>??????</Word>
          <Inputbox placeholder="userName" ref={userName} />
        </Modify>

        <Modify>
          <Word>?????? ??????</Word>
          <NationInput placeholder="Nation" ref={nation} />
        </Modify>

        <Modify>
          <Word>?????? ??????</Word>
          <NationInput placeholder="Introduce" ref={text} />
          <Savebtn
            onClick={() => {
              saveHandler();
            }}
          >
            ??????
          </Savebtn>
        </Modify>
      </MainProfile>
    </>
  );
}
