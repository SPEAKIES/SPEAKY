import React, { useContext, useRef } from 'react';

import {
  BoxContainer,
  FormContainer,
  Input,
  SmallText,
  SubmitButton,
  BoldLink,
  TopText,
  OtherLogin,
} from './common';
import { Marginer } from '../marginer';
import { AccountContext } from './accountContext';
import { Box } from '@mui/material';
import kakao from '../Loginpage/APIimage/kakao.png';
import google from '../Loginpage/APIimage/google.png';
import { Navigate, useNavigate } from 'react-router-dom';

const formData = new FormData();

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const navigate = useNavigate();

  const id = useRef();
  const pw = useRef();
  const email = useRef();
  const userName = useRef();
  const userImg = useRef();

  async function imgHandler(e) {
    formData.append('img', e.target.files[0]);
  }

  async function inputHandler(id, pw, email, userName) {
    console.log(id, pw, email, userName);
    const resImg = await fetch('http://localhost:4000/login/incimg', {
      method: 'POST',
      body: formData,
    });

    const imgName = await resImg.json();
    console.log(imgName);

    const res = await fetch('http://localhost:4000/login/incid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        pw,
        email,
        userName,
        userImg: imgName,
      }),
    });
    const result = await res.json();
    console.log(result);
    if (result === '회원가입 완료') {
      alert('회원가입 성공');
    } else {
      alert('회원가입 실패');
    }
  }
  return (
    <BoxContainer>
      <TopText>Image</TopText>
      <Marginer direction="vertical" margin={5} />
      <FormContainer>
        <Input
          type="file"
          placeholder="image"
          ref={userImg}
          onChange={imgHandler}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <TopText>Email</TopText>
      <Marginer direction="vertical" margin={5} />
      <FormContainer>
        <Input type="text" placeholder="Email" ref={email} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />

      <TopText>User ID</TopText>
      <Marginer direction="vertical" margin={5} />
      <FormContainer>
        <Input type="id" placeholder="ID" ref={id} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <TopText>User name</TopText>
      <Marginer direction="vertical" margin={5} />
      <FormContainer>
        <Input type="text" placeholder="ID" ref={userName} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />

      <TopText>Password</TopText>
      <Marginer direction="vertical" margin={5} />
      <FormContainer>
        <Input type="password" placeholder="Password" ref={pw} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin={20} />
      <SubmitButton
        type="submit"
        onClick={() => {
          inputHandler(
            id.current.value,
            pw.current.value,
            email.current.value,
            userName.current.value,
          );
        }}
      >
        Sign in
      </SubmitButton>
      <Marginer direction="vertical" margin="1.6em" />
      <SmallText>
        Do you have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Login
        </BoldLink>
      </SmallText>
    </BoxContainer>
  );
}
