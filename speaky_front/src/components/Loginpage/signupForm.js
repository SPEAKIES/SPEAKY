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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const naviagte = useNavigate();

  const id = useRef();
  const pw = useRef();
  const email = useRef();

  async function inputHandler(id, pw, email) {
    const res = await fetch('http://localhost:4000/login/incid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        pw,
        email,
      }),
    });
    const result = await res.json();
    if (result === '회원가입 완료') {
      alert('회원가입 성공');
    } else {
      alert('회원가입 실패');
    }
  }
  return (
    <BoxContainer>
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
          inputHandler(id.current.value, pw.current.value, email.current.value);
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
