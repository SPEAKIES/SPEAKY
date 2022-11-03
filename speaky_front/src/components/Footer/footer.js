import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  padding-top: 3vw;
  padding-bottom: 1vw;
  margin-top: 10vw;
  justify-content: space-evenly;

  @media only screen and (max-width: 740px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

const Top = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 740px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

const QuickLink = styled.div`
  width: 300px;
  height: 290px;
  text-align: center;
`;

const BigTitle = styled.h3`
  margin-bottom: 1vw;
`;
const Links = styled.h6`
  padding-top: 1vw;
  padding-bottom: 0.5vw;
  margin: 0 auto;
  width: 30%;
  text-align: left;
  /* &:not(:last-child) {
    border-bottom: 1px solid #c8c8c8;
  } */
`;
const Social = styled.div`
  width: 300px;
  height: 290px;
  text-align: center;
`;

const Icons = styled.img`
  margin-top: 1vw;
  width: 30px;
  margin-left: 1vw;
`;

const Company = styled.div`
  width: 300px;
  height: 290px;
  text-align: center;
`;

const Links2 = styled.h6`
  padding-top: 0.7vw;
  padding-bottom: 0.5vw;
  margin: 0 auto;
  width: 30%;
  text-align: left;
  /* &:not(:last-child) {
    border-bottom: 1px solid #c8c8c8;
  } */
`;

const Copyright = styled.p`
  text-align: center;
  margin-top: 5vw;
`;
export default function footer() {
  return (
    <>
      <Footer>
        <Top>
          <QuickLink />
          <QuickLink>
            <BigTitle>Speaky</BigTitle>
            <Links>HOME</Links>
            <Links>Board</Links>
            <Links>Study</Links>
            <Links>Community</Links>
            <Links>My page</Links>
          </QuickLink>

          <Company>
            <BigTitle>Company</BigTitle>
            <Links2>Netflix</Links2>
            <Links2>DHL</Links2>
            <Links2>FedEx</Links2>
            <Links2>HBO</Links2>
            <Links2>ebay</Links2>
            <Links2>Paypal</Links2>
          </Company>

          <Social>
            <BigTitle>Contact us</BigTitle>
            <Icons src="https://cdn-icons-png.flaticon.com/512/733/733547.png" />
            <Icons src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" />
            <Icons src="https://cdn-icons-png.flaticon.com/512/3536/3536424.png" />
            <Icons src="https://cdn-icons-png.flaticon.com/512/3938/3938026.png" />
          </Social>
          <QuickLink />
        </Top>

        <Copyright>
          <p>Copyrightⓒ2022 All rights reserved.</p>
        </Copyright>
      </Footer>
    </>
  );
}
