import React, { useEffect, useState } from 'react';
import Header from '../Header.js';
import styled from 'styled-components';
import { Box } from '@mui/material';
import { DefaultPlayer as Video, P } from 'react-html5video';
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
import { TutorsData } from './TutorsData.js';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const TutorProfile = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  margin-bottom: 1vw;
  margin-top: 6vw;
  margin: 0 6vw 3vw 2vw;
`;

const ProfilePic = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 1em 1em 0;
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

export default function Tutordetail({ tutor }) {
  const [value, setValue] = React.useState(dayjs('2022-011-03T00:00:00.000Z'));
  const [reserve, setReserve] = useState([]);

  //????????? ????????? ?????? ?????? ???????????? useParams()
  const params = useParams();

  //????????? ????????? ?????? ???????????? ????????? ????????? ?????? ??????
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
        tutor,
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
      new Error('?????? ??????');
    }
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    fetch('http://localhost:4000/tutor/getreserve')
      .then((res) => res.json())
      .then((res) => {
        setReserve(res);
      });
    scrollTop();
  }, []);

  return (
    <>
      <Header />
      <Box
        sx={{
          width: '80vw',
          margin: '0 auto',
          marginTop: '150px',
        }}
      >
        <TutorProfile>
          <ProfilePic>
            <Stack direction="row" spacing={2}>
              <Avatar
                //?????? ?????? ?????? ????????? ???????????? ????????? ?????? ??????
                alt={tutorInfo.name}
                src={tutorInfo.Img}
                sx={{ width: '120px', height: '120px' }}
              />
            </Stack>
          </ProfilePic>
          <Self>
            <TutorName>{tutorInfo.name}</TutorName>
            <TutorNation>
              {/*?????? ?????? ?????? ????????? ???????????? ????????? ?????? ?????? */}
              <FlagImg src={tutorInfo.flagimg} />
              {tutorInfo.nation}
            </TutorNation>
          </Self>
          <Link to={`/chat/${params.tutor}`}>
            <Button
              variant="contained"
              disableElevation
              sx={{
                marginLeft: '50px',
                marginTop: '1.5vw',
                minWidth: '100px',
              }}
            >
              ?????? ??????
            </Button>
          </Link>
        </TutorProfile>
        <Video loop>
          <source src={TutorVideo} type="video/webm" sx={{ height: '400px' }} />
        </Video>
        <SelfIntro>
          <Intro>
            {`Hi, my name is ${tutorInfo.name} and I am from ${tutorInfo.nation}.
            I have been teaching English for two years to children in the
            classroom and privately on a one-to-one basis. I can help you with
            your grammar, reading, writing, business-related techniques or we
            can just have a relaxed and friendly chat. Book a session with me
            and we can work together on boosting your confidence in English.`}
          </Intro>
        </SelfIntro>
        <Word>?????? ??????</Word>
        <About>
          <Title>?????????? ?????????</Title>

          <Content>
            My teaching style is fun and interactive. Once I get to know my
            students, I like to tailor my classes to incorporate
            extra-curricular knowledge so they can develop a deeper
            understanding of English.
          </Content>
        </About>

        <About>
          <Title>?????????? ??????</Title>
          <Content>
            My teaching style is fun and interactive. Once I get to know my
            students, I like to tailor my classes to incorporate
            extra-curricular knowledge so they can develop a deeper
            understanding of English.
          </Content>
        </About>
        <About>
          <Title>??????????</Title>
          <Content>
            My teaching style is fun and interactive. Once I get to know my
            students, I like to tailor my classes to incorporate
            extra-curricular knowledge so they can develop a deeper
            understanding of English.
          </Content>
        </About>
        <About>
          <Title>??????????</Title>
          <LastContent>
            My teaching style is fun and interactive. Once I get to know my
            students, I like to tailor my classes to incorporate
            extra-curricular knowledge so they can develop a deeper
            understanding of English.
          </LastContent>
        </About>
        <SelfIntro />
        <List>
          <ListWord> ?????? ?????? </ListWord>
          {/* ???????????? ????????? ????????? map ????????? ?????? ?????? ???????????? */}

          {reserve.map((el) => {
            return (
              <Person>
                {`${el.id}: ${el.date.year}??? ${el.date.month + 1}??? ${el.date.day
                  }???
                ${el.date.hour}??? ${el.date.minute}???`}
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
            ??????
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
            <ListWord> ?????? ?????? </ListWord>
            {/* ???????????? ????????? ????????? map ????????? ?????? ?????? ???????????? */}

            {!isNaN(value.$D) ? (
              state !== undefined ? (
                <Person>
                  <div>{`${state} : ${value.$y}??? ${value.$M + 1}??? ${value.$D
                    }???, ${value.$H}??? ${value.$m}???`}</div>
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
