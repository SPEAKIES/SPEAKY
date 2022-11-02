import React from 'react';
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
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import Stack from '@mui/material/Stack';
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
  background-color: orange;
  display: flex;
  margin-bottom: 1vw;
`;

const ProfilePic = styled.div`
  width: 120px;
  height: 120px;
  background-color: skyblue;
  margin: 0 auto;
`;

const SelfIntro = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 30px;
  border-bottom: 1px solid #c8c8c8;
  padding-bottom: 30px;
`;

const Name = styled.h4`
  float: left;
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

const Button = styled.div`
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
  return (
    <>
      <Header />
      <Box
        sx={{
          width: '1200px',
          margin: '0 auto',
          marginTop: '100px',
        }}
      >
        <TutorProfile>
          <ProfilePic
            component="img"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20150608_50%2Fsmile_0519_1433770397673NL9ud_JPEG%2F20140714_153748_5308.jpg.tn580.jpg&type=a340"
            alt="Tutor1"
          ></ProfilePic>
        </TutorProfile>
        <Video loop>
          <source src={TutorVideo} type="video/webm" sx={{ height: '400px' }} />
        </Video>
        <SelfIntro>
          <Name>Jamie</Name>
          <br />
          <br />
          <Intro>
            Hi, my name is Valerie and I am from England in the United Kingdom.
            I have been teaching English for two years to children in the
            classroom and privately on a one-to-one basis. I can help you with
            your grammar, reading, writing, business-related techniques or we
            can just have a relaxed and friendly chat. Book a session with me
            and we can work together on boosting your confidence in English.
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
        <Reserve>
          <Button>예약</Button>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              {/* <MobileDateTimePicker
                label="For mobile"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              /> */}

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
            <ListWord> 예약 목록 </ListWord>
            <Person>
              {console.log(value.$d)}
              {console.log(value)}
              <div>{`${value.$y}년 ${value.$M + 1}월 ${value.$D}일, ${
                value.$H
              }시 ${value.$m}분`}</div>
            </Person>
          </List>
        </Reserve>
      </Box>
    </>
  );
}
