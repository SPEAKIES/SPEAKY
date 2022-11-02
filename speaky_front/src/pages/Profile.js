import React from 'react';
import Header from '../components/Header';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import FollowList from '../components/FollowList';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
const drawerWidth = '15%';
export default function Profile() {
  const navigate = useNavigate();
  const FollowListData = useSelector((state) => state.community.FollowListData);
  const chatClick = () => {
    navigate('/chat', {
      state: {
        data: '프로필에서 채팅',
      },
    });
  };
  const location = useLocation();
  console.log(location.state);
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
                      사용자 이름
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h3">자기소개</MDBTypography>

                      <MDBRow className="pt-1">
                        <MDBCol size="12" className="mb-3">
                          <MDBTypography tag="h5">
                            안녕하세요 저는 ooo 입니다
                          </MDBTypography>
                        </MDBCol>
                      </MDBRow>

                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">
                            info@example.com
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">
                            010-000-0000
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">성별</MDBTypography>
                          <MDBCardText className="text-muted">남</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">선호하는 언어</MDBTypography>
                          <MDBCardText className="text-muted">
                            한국어
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
