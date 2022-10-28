import React from "react";
import styled from "styled-components";
import { LoginPage } from "../components/Loginpage";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vw;
`;

export default function Login2() {
  return (
    <AppContainer>
      <LoginPage />
    </AppContainer>
  );
}
