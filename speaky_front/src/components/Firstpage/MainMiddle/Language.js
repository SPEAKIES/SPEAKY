import React from "react";
import "./Language.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import images from "./Flagimages";
// import LanguageWord from '../../../LanguageWord';

const Carousel = styled.div`
  margin: 0 5%;
`;

const Word = styled.p`
  font-size: clamp(14px, 14px, 14px);
  text-align: center;
  margin: 4vw 0 0 0;
`;

export default function Language() {
  const language = [
    "영어",
    "일본어",
    "한국어",
    "독일어",
    "프랑스어",
    "스페인어",
  ];
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <Word>내가 학습하고 싶은 언어는</Word>
      <Carousel>
        <motion.div
          ref={carousel}
          className="carousel2"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {images.map((image, i) => {
              return (
                <motion.div className="item" key={image}>
                  <img src={image} alt="" />
                  <p className="item_word">{language[i]}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Carousel>
    </>
  );
}
