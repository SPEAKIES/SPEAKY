import React, { useContext, useRef, useState } from 'react';

import {
  BoxContainer,
  FormContainer,
  TopText,
  Input,
  SmallText,
  MutedLink,
  SubmitButton,
  BoldLink,
  OtherLogin,
} from './common';
import kakao from '../Loginpage/APIimage/kakao.png';
import google from '../Loginpage/APIimage/google.png';
import { Marginer } from '../marginer';
import { AccountContext } from './accountContext';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../store/modules/user';

const KAKAO_CLIENT_ID = 'fd32ba2050199e532fe49d5c35a2c0d7';
const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

export function LoginForm(props) {
  const [loginCondition, setLoginCondition] = useState({
    condition: false,
    msg: '회원 정보를 정확하게 입력하세요!',
  });
  const [openDialog, setOpenDialog] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userIdInput = useRef();
  const userPasswordInput = useRef();

  async function loginUser() {
    setOpenDialog(false);

    const loginInfo = {
      id: userIdInput.current.value,
      pw: userPasswordInput.current.value,
    };

    if (
      userIdInput.current.value !== '' &&
      userPasswordInput.current.value !== ''
    ) {
      const response = await fetch('http://localhost:4000/login/setid ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      });

      if (response.status === 200) {
        const result = await response.json();
        console.log(result);
        if (result.result) {
          dispatch(login(result));
          navigate('/main');
        }

        setLoginCondition({
          condition: result.result,
          msg: result.msg,
        });

        setOpenDialog(true);
      } else {
        throw new Error('로그인 실패');
      }
    } else {
    }
  }
  const { switchToSignup } = useContext(AccountContext);
  return (
    <BoxContainer>
      <TopText>User ID</TopText>
      <Marginer direction="vertical" margin={5} />
      <FormContainer>
        <Input
          type="name"
          placeholder="ID"
          onChange={(input) => {
            userIdInput.current.value = input.target.value;
          }}
          ref={userIdInput}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <TopText>Password</TopText>
      <Marginer direction="vertical" margin={5} />
      <FormContainer>
        <Input
          type="password"
          placeholder="Password"
          onChange={(input) => {
            userPasswordInput.current.value = input.target.value;
          }}
          ref={userPasswordInput}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <OtherLogin>
        <Link href={KAKAO_AUTH_URL}>
          <Box
            component="div"
            sx={{
              backgroundImage: `url(${kakao})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '40px',
              height: '40px',
              color: 'black',
              marginRight: '50px',
            }}
          ></Box>
        </Link>
        <a>
          <Box
            component="div"
            sx={{
              backgroundImage: `url(${google})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '40px',
              height: '40px',
              color: 'black',
            }}
          ></Box>
        </a>
      </OtherLogin>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton type="submit" onClick={() => loginUser()}>
        Sign in
      </SubmitButton>
      <Marginer direction="vertical" margin="1.6em" />

      <SmallText>
        Don't have an account?
        <BoldLink href="#" onClick={switchToSignup}>
          Sign up
        </BoldLink>
      </SmallText>
      <Marginer direction="vertical" margin="1.6em" />
    </BoxContainer>
  );
}
