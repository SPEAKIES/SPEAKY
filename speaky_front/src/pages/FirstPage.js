import React from "react";
import Header from "../components/Header";
import Photo from "../components/Firstpage/MainMiddle/Photo.js";
import Language from "../components/Firstpage/MainMiddle/Language.js";
import MainMiddle from "../components/Firstpage/MainMiddle/MainMiddle.js";
import GlobalStyle from "../components/GlobalStyle";

export default function FirstPage() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Photo />
      <Language />
      <MainMiddle />
    </>
  );
}
