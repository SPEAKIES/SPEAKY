import React from 'react';
import Header from '../components/Header';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import FollowList from '../components/FollowList';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from 'mdb-react-ui-kit';
import { useEffect } from 'react';
import { profileInit } from '../store/modules/community';
const drawerWidth = '15%';
export default function Profile() {
  const navigate = useNavigate();
  const FollowListData = useSelector((state) => state.community.FollowListData);
  const profiledata = useSelector((state) => state.community.profiledata);
  const location = useLocation();
  console.log(location.state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    // async function fetchData() {
    //   const freeBoardData = await fetch('http://localhost:3000/freeBoard', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       userId: location.state.data,
    //     }),
    //   });
    //   if (freeBoardData.status === 200) {
    //     const data = await freeBoardData.json();
    //     if (data) {
    //       console.log(data);
    //     }
    //   } else {
    //     throw new Error('통신 이상');
    //   }
    // }
    // fetchData();
    const test = {
      userName: '보거스',
      userIntroduce: '안녕하세요 저는 ㅁㄴㅇㅁㄴㅇ입니다',
      userEmail: 'asd@naver.com',
      userPhone: '010-000-0000',
      userLanguage: '한국어',
      userGender: '남',
      userImage: '이미지 경로',
    };
    dispatch(profileInit(test));
  }, [dispatch]);

  const chatClick = () => {
    navigate('/chat', {
      state: {
        data: '상대방 유저 아이디',
      },
    });
  };
  return (
    <>
      <Header />
      <div style={{ height: 100 }}>헤더</div>
      <section className="vh-80" style={{ backgroundColor: '#dcdcdc' }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="8" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                <MDBRow className="g-0">
                  <MDBCol
                    md="4"
                    className="gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: '.5rem',
                      borderBottomLeftRadius: '.5rem',
                    }}
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="my-5"
                      style={{ width: '300px' }}
                      fluid
                    />
                    <MDBTypography tag="h4" color="black">
                      {profiledata.userName}
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h3">자기소개</MDBTypography>

                      <MDBRow className="pt-1">
                        <MDBCol size="12" className="mb-3">
                          <MDBTypography tag="h5">
                            {profiledata.userIntroduce}
                          </MDBTypography>
                        </MDBCol>
                      </MDBRow>

                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">
                            {profiledata.userEmail}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">
                            {profiledata.userPhone}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">성별</MDBTypography>
                          <MDBCardText className="text-muted">
                            {profiledata.userGender}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">선호하는 언어</MDBTypography>
                          <MDBCardText className="text-muted">
                            {profiledata.userLanguage}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <Button
                        variant="primary"
                        style={{ width: '100%', right: 0, bottom: 0 }}
                        onClick={chatClick}
                      >
                        메시지 보내기
                      </Button>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Drawer
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            marginTop: 9.6,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Divider />
        <ListSubheader component="div" id="nested-list-subheader">
          친구창
        </ListSubheader>
        <FollowList data={FollowListData} />
        <Divider />
      </Drawer>
    </>
  );
}
