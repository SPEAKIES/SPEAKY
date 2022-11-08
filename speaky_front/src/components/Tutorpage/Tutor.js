import * as React from 'react';
import { useState } from 'react';
import Header from '../Header.js';
import styled from 'styled-components';
import { TutorsData } from './TutorsData.js';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Footer from '../Footer/footer';

import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Box = styled.div`
  width: 390px;
  margin-bottom: 2vw;
  margin-left: 2vw;
  box-shadow: 0px 0px 10px #c8c8c8;
  border-radius: 20px;
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
  }
  @media only screen and (max-width: 1280px) {
    margin-top: 30px;
  }
`;

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

const Select = styled.div`
  display: flex;
  margin-top: 7vw;
`;

const Find = styled.div`
  margin-right: 50px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-left: 100px;
  background-color: skyblue;
  padding: 5px 20px;
  border-radius: 10px;
`;

const My = styled.a`
  text-decoration: none;
  font-size: 30px;
  color: black;
  background-color: skyblue;
  padding: 5px 20px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const FlagImg = styled.img`
  width: 2vw;
  margin-right: 0.5vw;
`;

const Icon = styled.div``;

export default function Tutor() {
  const [heart, setHeart] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const handleHeart = (i) => {
    let like = [...heart];
    like[i] = !like[i];
    setHeart(like);
  };

  return (
    <>
      <Header />
      <Select>
        <Find>튜터 목록</Find>
      </Select>
      <Main>
        {TutorsData.map((data, i) => (
          <Box key={(data, i)}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  src={data.Img}
                  alt="Tutor1"
                  sx={{
                    width: '130px',
                    height: '120px',
                    marginTop: '10px',
                    marginLeft: '120px',
                    borderRadius: '10px',
                  }}
                />

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: 'center' }}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="p"
                    component="div"
                    sx={{ textAlign: 'center' }}
                  >
                    <FlagImg component="img" src={data.flagimg} />
                    {data.nation}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: 'center' }}
                  >
                    Hi, my name is Valerie and I am from England in the United
                    Kingdom. I have been teaching English for two years to
                    children...
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Link to="/tutor/profile">
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ marginLeft: '100px' }}
                  >
                    프로필
                  </Button>
                </Link>
                <Link to="/chat">
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ marginLeft: '20px' }}
                  >
                    채팅
                  </Button>
                </Link>

                <Icon onClick={() => handleHeart(i, heart[i])}>
                  {heart[i] ? (
                    <FavoriteIcon
                      sx={{
                        color: 'red',
                        marginLeft: '6.5vw',
                        cursor: 'pointer',
                      }}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      sx={{
                        marginLeft: '6.5vw',
                        cursor: 'pointer',
                      }}
                    />
                  )}
                </Icon>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Main>
      <Footer />
    </>
  );
}
