import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../Mainpage/Navbar.js';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import Avatar from 'react-avatar-edit';
import img from './img.webp';

const Topbox = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: beige;
  display: flex;
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

const Profilename = styled.div`
  min-width: 200px;
  min-height: 200px;
  margin-left: 5vw;
`;

const Name = styled.h5`
  margin-top: 70px;
`;

const Nation = styled.h5``;

const Introduction = styled.h5``;

const MainProfile = styled.div`
  width: 100%;
  height: 500px;
  background-color: pink;
  margin-top: 4vw;
`;

const Select = styled.div`
  width: 100%;
  min-height: 30px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
`;

const Profile = styled.a`
  margin-right: 90px;
`;

const Account = styled.a``;

export default function Mypage() {
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  };
  const onCrop = (view) => {
    setPreview(view);
  };

  useEffect(() => {});

  return (
    <>
      <Navbar />
      <Topbox>
        <Profilebox>
          <Avatar
            width={200}
            height={200}
            onCrop={onCrop}
            onClose={onClose}
            src={src}
          />
          {preview && (
            <img src={preview} style={{ width: '200px', height: '200px' }} />
          )}

          <Profilename>
            <Name>이름 :</Name>
            <Nation>국가 :</Nation>
            <Introduction>자기소개 : </Introduction>
          </Profilename>
        </Profilebox>
      </Topbox>

      <MainProfile>
        <Select>
          <Profile>학생 프로필</Profile>
          <Account>계정 설정</Account>
        </Select>
      </MainProfile>
    </>
  );
}
