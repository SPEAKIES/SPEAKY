import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: 300px;
  margin-bottom: 2vw;
  margin-left: 2vw;
  box-shadow: 0px 0px 10px #c8c8c8;
  border-radius: 20px;
  transition: 0.5s;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
  @media only screen and (max-width: 1280px) {
    margin-top: 30px;
  }
`;

export default function ManagePage() {
  const tutor = useParams().tutor;
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const getAllRes = await fetch('http://localhost:4000/chat/allChat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tutor,
        }),
      });
      if (getAllRes.status === 200) {
        const data = await getAllRes.json();
        if (data) {
          const studentList = checkArr(data);
          setRooms(studentList);
        }
      } else {
        throw new Error('통신 이상');
      }
    }
    fetchData();
  }, []);

  // Tutor 에게 신청한 학생을 구분하는 함수
  const checkArr = (arr) => {
    const allArr = arr.map((el) => el.id);
    const studentListSet = new Set(allArr);
    const studentListArr = Array.from(studentListSet);
    return studentListArr;
  };

  return (
    <>
      <Header />
      <Typography sx={{ marginTop: '100px', textAlign: 'center' }} variant="h4">
        채팅방 목록
      </Typography>
      <Main>
        {rooms.map((el, i) => (
          <Box key={el}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  학생 ID : {el}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link
                  to={`/manage/chat/${tutor}/${el}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Button size="small" sx={{ fontSize: '20px' }}>
                    참여하기
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Main>
    </>
  );
}
