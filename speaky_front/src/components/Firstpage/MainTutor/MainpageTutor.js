import React from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TutorData } from '../MainTutor/MainpageTutorData.js';
import '../MainTutor/MainpageTutor.css';

const Word = styled.div`
  text-align: center;
  margin-top: 5vw;
`;

const Card = styled.div`
  overflow: hidden;
  margin-top: 4vw;
  padding-left: 3vw;
  cursor: grab;
  justify-content: center;
`;

const CardTop = styled.div`
  /* border: 1px solid gray;
  background-color: #fff;
  padding: 1vw 0; */
  /* background-color: pink; */
`;

export default function Tutor() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Word>
        <h4>
          <strong>Our Top Tutors</strong>
        </h4>
      </Word>
      <Slider {...settings}>
        {TutorData.map((data) => (
          <Card key={data}>
            <CardTop>
              <img className="card-img" src={data.Img} alt="" />
              <div className="tutorname">{data.name}</div>
              <div className="tutornation">{data.nation}</div>
            </CardTop>
          </Card>
        ))}
      </Slider>
    </>
  );
}
