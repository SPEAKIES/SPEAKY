import React, { useRef } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
} from 'mdb-react-ui-kit';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { useLocation } from 'react-router';
import TextField from '@mui/material/TextField';

export default function Chat() {
  const location = useLocation();
  const messageContent = useRef();
  console.log(location.state);

  const test = (e) => {
    if (e.key === 'Enter') {
      console.log(messageContent.current.value);
      //메시지 입력하면 들어가는거 구현하면됨.
    }
  };
  return (
    <MDBContainer className="py-5 mt-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="6">
          <MDBCard id="chat1" style={{ borderRadius: '15px' }}>
            <MDBCardHeader
              className="d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
              style={{
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
              }}
            >
              <p className="mb-0 fw-bold">상대방 이름</p>
            </MDBCardHeader>

            <MDBCardBody style={{ height: 350, overflowY: 'scroll' }}>
              <div className="d-flex flex-row justify-content-start mb-4">
                <div>
                  <Avatar
                    sx={{ bgcolor: red[500], margin: '10px' }}
                    aria-label="recipe"
                    src={'유저이미지경로'}
                  />
                  <div style={{ width: 100 }}>상대방이름</div>
                </div>
                <div
                  className="p-3 ms-3"
                  style={{
                    borderRadius: '15px',
                    backgroundColor: '#fbfbfb',
                    width: '50%',
                  }}
                >
                  <p className="middle mb-0">상대방유저메시지</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  오전 12:30
                </div>
              </div>

              <div className="d-flex flex-row justify-content-end mb-4">
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  오전 12:31
                </div>
                <div
                  className="p-3 me-4 border"
                  style={{
                    borderRadius: '15px',
                    backgroundColor: 'rgba(57, 192, 237,.2)',
                    width: '50%',
                  }}
                >
                  <p className="middle mb-0">본인메시지</p>
                </div>
                <div>
                  <Avatar
                    sx={{ bgcolor: red[500], margin: '10px' }}
                    aria-label="recipe"
                    src={'유저이미지경로'}
                  />
                  <div>본인이름</div>
                </div>
              </div>
            </MDBCardBody>
            <TextField
              sx={{ width: '100%' }}
              placeholder="댓글을 입력해주세요..."
              multiline
              inputRef={messageContent}
              onKeyPress={test}
            />
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
