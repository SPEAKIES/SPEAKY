import React, { useEffect, useState } from 'react';
import Header from '../Header.js';
import styled from 'styled-components';
import { Box } from '@mui/material';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import TutorVideo from './TutorVideo/video.mp4';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// tetz 튜터 정보는 파일로 제공 되어 있네요! 백엔드 통신은 필요 없을 것 같습니다!
import { TutorsData } from './TutorsData.js';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// const Middle = styled.div`
//   height: 1000px;
//   width: 50vw;
//   background-color: pink;
//   margin: 0 auto;
//   margin-top: 40px;
// `;

const TutorProfile = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  margin-bottom: 1vw;
  margin-top: 6vw;
`;

const ProfilePic = styled.div`
  width: 120px;
  height: 120px;
  margin-left: 5em;
  margin-right: 1em;
`;

const Self = styled.div``;

const TutorName = styled.h4`
  margin-left: 1vw;
  margin-top: 1vw;
  margin-bottom: 0.5em;
`;

const FlagImg = styled.img`
  width: 1.6vw;
  margin-right: 1vw;
`;

const TutorNation = styled.h5`
  margin-left: 1.5vw;
`;

const SelfIntro = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 30px;
  border-bottom: 1px solid #c8c8c8;
  padding-bottom: 30px;
`;

const Intro = styled.h5`
  margin-top: 30px;
`;

const About = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 4vw;
`;

const Reserve = styled.div``;

const Word = styled.h4`
  margin-left: 3vw;
  margin-top: 1vw;
  padding-bottom: 2vw;
`;

const Title = styled.h5`
  margin-top: 1vw;
  margin-bottom: 1vw;
`;

const Content = styled.h6`
  margin-bottom: 1vw;
`;

const LastContent = styled.h6`
  margin-bottom: 2vw;
`;

const ReserveBtn = styled.div`
  width: 90%;
  text-align: center;
  background-color: orange;
  padding: 0.5vw 0;
  margin: 0 auto;
  margin-bottom: 3vw;
  border-radius: 10px;
  margin-top: 3vw;
`;

const List = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 30px;
  border: 1px solid #c8c8c8;
  padding-bottom: 30px;
`;

const ListWord = styled.h4`
  text-align: center;
`;

const Person = styled.div`
  background-color: aliceblue;
  display: inline-block;
  padding: 1vw 2vw;
  border-radius: 10px;
  margin-left: 3vw;
`;

export default function Tutordetail() {
  const [value, setValue] = React.useState(dayjs('2022-011-03T00:00:00.000Z'));
  const [reserve, setReserve] = useState([]);
  // tetz 주소로 넘어온 튜터 이름 가져오는 useParams()
  const params = useParams();

  // tetz 주소로 넘어온 튜터 이름으로 튜터의 정보를 찾는 부분
  const tutorIndex = TutorsData.findIndex((el) => el.name === params.tutor);
  const tutorInfo = TutorsData[tutorIndex];

  const state = useSelector((state) => state.user.id);

  async function reserveHandler() {
    const res = await fetch('http://localhost:4000/tutor/reserve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tutor: params.tutor,
        id: state,
        year: value.$y,
        month: value.$M,
        day: value.$D,
        hour: value.$H,
        minute: value.$m,
        value,
      }),
    });
    if (res.status === 200) {
      const result = await res.json();
      alert(result);
    } else {
      new Error('서버 이상');
    }
  }
  useEffect(() => {
    fetch('http://localhost:4000/tutor/getreserve')
      .then((res) => res.json())
      .then((res) => {
        setReserve(res);
      });
  }, []);

  return (
    <>
      <Header />
      <Box
        sx={{
          width: '1200px',
          margin: '0 auto',
          marginTop: '30px',
        }}
      >
        <TutorProfile>
          <ProfilePic>
            <Stack direction="row" spacing={2}>
              <Avatar
                // tetz 찾은 튜터 정보 객체를 이용해서 필요한 정보 넣기
                alt={tutorInfo.name}
                src={tutorInfo.Img}
                sx={{ width: '120px', height: '120px' }}
              />
            </Stack>
          </ProfilePic>
          <Self>
            <TutorName></TutorName>
            <TutorNation>
              {/* tetz 찾은 튜터 정보 객체를 이용해서 필요한 정보 넣기 */}
              <FlagImg src={tutorInfo.flagimg} />
              {tutorInfo.nation}
            </TutorNation>
          </Self>
          <Button
            variant="contained"
            disableElevation
            sx={{
              height: '3vw',
              marginLeft: '18vw',
              marginTop: '1.5vw',
              width: '20vw',
            }}
          >
            수업 듣기
          </Button>
        </TutorProfile>
        <Video loop>
          <source src={TutorVideo} type="video/webm" sx={{ height: '400px' }} />
        </Video>
        <SelfIntro>
          <Intro>
            {/* tetz 튜터 정보에 없는 내용이 담겨 있어서 문장 수정 */}
            {`Hi, my name is ${tutorInfo.name} and I am from ${tutorInfo.nation}.
            I have been teaching for two years to children in the
            classroom and privately on a one-to-one basis. I can help you with
            your grammar, reading, writing, business-related techniques or we
            can just have a relaxed and friendly chat. Book a session with me
            and we can work together on boosting your confidence in English.`}
          </Intro>
        </SelfIntro>
        <Word>튜터 소개</Word>
        <About>
          <Title>📚수업 스타일</Title>

          <Content>
            My teaching style is fun and interactive. Once I get to know my
            students, I like to tailor my classes to incorporate
            extra-curricular knowledge so they can develop a deeper
            understanding of English.
          </Content>
        </About>

        <About>
          <Title>👤자기 소개</Title>
          <Content>
            My teaching style is fun and interactive. Once I get to know my
            students, I like to tailor my classes to incorporate
            extra-curricular knowledge so they can develop a deeper
            understanding of English.
          </Content>
        </About>
        <About>
          <Title>🌍언어</Title>
          <Content>
            My teaching style is fun and interactive. Once I get to know my
            students, I like to tailor my classes to incorporate
            extra-curricular knowledge so they can develop a deeper
            understanding of English.
          </Content>
        </About>
        <About>
          <Title>💼경력</Title>
          <LastContent>
            My teaching style is fun and interactive. Once I get to know my
            students, I like to tailor my classes to incorporate
            extra-curricular knowledge so they can develop a deeper
            understanding of English.
          </LastContent>
        </About>
        <SelfIntro />
        <List>
          <ListWord> 예약 목록 </ListWord>
          {/* 서버에서 데이터 받아서 map 돌려서 예약 내역 그려주기 */}

          {reserve.map((el) => {
            return (
              <Person>
                {`${el.id}: ${el.date.year}년 ${el.date.month + 1}월 ${
                  el.date.day
                }일
                ${el.date.hour}시 ${el.date.minute}분`}
              </Person>
            );
          })}
        </List>
        <Reserve>
          <Button
            type="button"
            onClick={() => {
              reserveHandler();
            }}
          >
            예약
          </Button>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DateTimePicker
                label="Reserve"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{
                      width: '50vw',
                      margin: '0 auto',
                      marginBottom: '70px',
                    }}
                  />
                )}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </Stack>
          </LocalizationProvider>

          <List>
            <ListWord> 예약 하기 </ListWord>
            {/* 서버에서 데이터 받아서 map 돌려서 예약 내역 그려주기 */}

            {!isNaN(value.$D) ? (
              state !== undefined ? (
                <Person>
                  <div>{`${state} : ${value.$y}년 ${value.$M + 1}월 ${
                    value.$D
                  }일, ${value.$H}시 ${value.$m}분`}</div>
                </Person>
              ) : (
                ''
              )
            ) : (
              ''
            )}
          </List>
        </Reserve>
      </Box>
    </>
  );
}
