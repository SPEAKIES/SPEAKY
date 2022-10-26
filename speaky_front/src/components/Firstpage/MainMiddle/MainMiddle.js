import styled from "@emotion/styled";
import React, { useEffect } from "react";
import AOS from "aos";
import Tutor from "../MainTutor/MainpageTutor.js";
import "aos/dist/aos.css";
import "./MainMiddle.css";
import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";

const Word = styled.div`
  font-size: clamp(30px, 20px, 20px);
  margin-top: 5.5vw;
  text-align: center;
`;

// Box1
const Box1 = styled.div`
  width: 100%;
  min-height: 20vw;
  margin-top: 7vw;
  /* background-color: skyblue; */
  display: flex;
  @media only screen and (max-width: 900px) {
    flex-direction: column;

    img {
      margin-left: 0;
    }
  }
`;

const Word1 = styled.p`
  text-align: left;
  margin-top: 6vw;
  margin-left: 4vw;
`;

// BOX2
const Box2 = styled.div`
  width: 100%;
  min-height: 20vw;
  margin-top: 3vw;
  /* background-color: pink; */
  display: flex;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    img {
      margin-left: 0;
    }
  }
`;

const Word2 = styled.p`
  text-align: left;
  margin-top: 4vw;
  margin-left: 5vw;
`;

//BOX3

const Box3 = styled.div`
  width: 100%;
  min-height: 20vw;
  margin-top: 3vw;
  /* background-color: pink; */
  display: flex;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    img {
      margin-left: 0vw;
    }
  }
`;

//Box4

const Box4 = styled.div`
  width: 100%;
  min-height: 20vw;
  /* background-color: lightgreen; */
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    img {
      margin-left: 27vw;
    }
  }
`;

const Word3 = styled.p`
  text-align: center;
  margin-top: 5vw;
  margin-bottom: 2vw;
`;

const Learn = styled.div`
  width: clamp(300px, 90%, 300px);
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
`;

//Contribute
const Contribute = styled.div`
  min-width: 100%;
  /* min-height: 10vw; */
  background-color: beige;
  margin-top: 8vw;
  display: flex;
`;

const Test = styled.div`
  width: 100%;
  height: 20vw;
  background-color: pink;
  margin-top: 5vw;
`;

export default function Middle() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Word>
        <strong>왜 Speaky와 함께 해야 할까요?</strong>
      </Word>
      <Box1 data-aos="fade-up">
        <img
          className="photo1"
          src="https://www.busuu.com/user/pages/home/_02-how-it-works-revamp/learn-own-pace-ko.jpg"
          alt="어플이미지"
        />
        <Word1>
          <p>전문가가 설계한 코스</p>
          <br />
          <h3>
            <strong>나에게 맞는 속도로 학습합니다.</strong>
          </h3>
          <br />
          언제든 원하는 시간에 언어 전문가들이 설계한 간단한 레슨으로 더 많이
          <br />
          학습하고 기억해 보세요. 실질적인 발전을 이루고 수료증으로 성과를
          입증해 보세요.
        </Word1>
      </Box1>

      <Box2 data-aos="fade-up">
        <img
          className="photo2"
          src="https://www.busuu.com/user/pages/home/_02-how-it-works-revamp/learn-real-people-ko.jpg"
          alt="화상통화이미지"
        />
        <Word2>
          <p>라이브 레슨</p>
          <br />
          <h3>
            <strong>실제 사람과 함께 학습합니다.</strong>
          </h3>
          <br />
          친절한 전문 개인 교사가 실시간으로 진행하는 1:1 레슨을 수강하며
          <br />
          학습하는 언어에 대한 자신감을 키울 수 있습니다.
          <br /> 단순히 배우지만 말고, 실제로 소리 내어 말해 보세요.
          <br />
          <Button
            variant="outlined"
            sx={{
              marginTop: "2vw",
              bgcolor: blue[50],
              transition: "0.5s",
              "&:hover": {
                color: blue[600],
                backgroundColor: blue[100],
              },
            }}
          >
            바로 체험하기
          </Button>
        </Word2>
      </Box2>

      <Box3 data-aos="fade-up">
        <img
          className="photo3"
          src="https://www.busuu.com/user/pages/home/_02-how-it-works-revamp/learn-together-ko.jpg"
          alt="커뮤니티이미지"
        />
        <Word1>
          <p>교류가 활발한 커뮤니티</p>
          <br />
          <h3>
            <strong>함께 학습합니다.</strong>
          </h3>
          <br />
          발음 및 문법 학습 팁을 공유하고, 연습한 내용을 교정 받고, 가능할 줄
          몰랐던
          <br /> 방법으로 교류합니다. 전 세계 원어민들의 든든한 지원을 받아
          보세요.
        </Word1>
      </Box3>
      {/* *********************************************************************************** */}
      <Word3>
        <h4>What can we Learn?</h4>
      </Word3>
      <Box4>
        <Learn>
          <img
            className="learnicon"
            src="https://cdn-icons-png.flaticon.com/512/1000/1000333.png"
            alt=""
          />
          <h4 className="learn">Speak</h4>
          <p className="learnwords">
            Speak with native speakers on any topic you want (not just about the
            weather). Make friends in different parts of the Earth!
          </p>
        </Learn>
        <Learn>
          <img
            className="learnicon"
            src="https://cdn-icons-png.flaticon.com/512/2436/2436882.png"
            alt=""
          />
          <h4 className="learn">Read</h4>
          <p className="learnwords">
            Speak with native speakers on any topic you want (not just about the
            weather). Make friends in different parts of the Earth!
          </p>
        </Learn>
        <Learn>
          <img
            className="learnicon"
            src="https://cdn-icons-png.flaticon.com/512/2436/2436818.png"
            alt=""
          />
          <h4 className="learn">Write</h4>
          <p className="learnwords">
            Speak with native speakers on any topic you want (not just about the
            weather). Make friends in different parts of the Earth!
          </p>
        </Learn>
        <Learn>
          <img
            className="learnicon"
            src="https://cdn-icons-png.flaticon.com/512/3050/3050484.png"
            alt=""
          />
          <h4 className="learn">Understand</h4>
          <p className="learnwords">
            Speak with native speakers on any topic you want (not just about the
            weather). Make friends in different parts of the Earth!
          </p>
        </Learn>
      </Box4>

      {/* *********************************************************************************** */}
      <Tutor />
      <Contribute data-aos="fade-up" data-aos-offset="100">
        <img
          className="netflix"
          src="https://cdn-icons-png.flaticon.com/512/5977/5977590.png"
          alt="넷플릭스"
        />
        <img
          className="icons"
          src="https://cdn-icons-png.flaticon.com/512/5977/5977580.png"
          alt="DHL"
        />
        <img
          className="icons"
          src="https://cdn-icons-png.flaticon.com/512/5977/5977583.png"
          alt="Fedex"
        />
        <img
          className="icons"
          src="https://cdn-icons-png.flaticon.com/512/5977/5977584.png"
          alt="HBO"
        />
        <img
          className="icons"
          src="https://cdn-icons-png.flaticon.com/512/5977/5977581.png"
          alt="ebay"
        />
        <img
          className="icons"
          src="https://cdn-icons-png.flaticon.com/512/196/196566.png"
          alt="paypal"
        />
      </Contribute>
    </>
  );
}
