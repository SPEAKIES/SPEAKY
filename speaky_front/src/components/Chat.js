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
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { messageInit } from '../store/modules/community';

export default function Chat({ tutor }) {
  const chatdata = useSelector((state) => state.community.chatdata);

  const userdata = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();

  const messageContent = useRef();

  console.log(location.state);
  console.log(userdata);

  useEffect(() => {
    // async function fetchData() {
    //   const sendChatRes = await fetch(
    //     'http://localhost:4000/chat',
    //     {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({
    //         userEmail: userdata.userEmail,
    //         id: userdata.id,
    //         message: {

    //         }
    //       }),
    //     },
    //   );
    //   if (sendChatRes.status === 200) {
    //     const data = await sendChatRes.json();
    //     if (data) {
    //       console.log(data);
    //     }
    //   } else {
    //     throw new Error('통신 이상');
    //   }
    // }
    // fetchData();
    //선택한 친구와의 대화창 데이터
  }, [dispatch]);

  const getTime = () => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();

    const dayNight = hours < 12 ? '오전' : '오후';

    return `${dayNight} ${hours}:${minutes}`;
  };

  const sendMessage = async (e) => {
    if (e.key === 'Enter') {
      await fetch('http://localhost:4000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: userdata.id,
          userEmail: userdata.userEmail,
          message: messageContent.current.value,
          messageDate: getTime(),
        }),
      });
      // dispatch(messageInit(testdata));

      const newChat = {
        userId: userdata.id,
        userName: userdata.id,
        userImage: '유저이미지',
        userMessage: messageContent.current.value,
        userMessageDate: getTime(),
      };
      dispatch(messageInit(newChat));
      console.log(chatdata);
      messageContent.current.value = '';
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
              <p className="mb-0 fw-bold">{tutor} 선생님과의 채팅</p>
            </MDBCardHeader>
            <MDBCardBody style={{ height: 350, overflowY: 'scroll' }}>
              {chatdata.map((value, index) => {
                if (value.userId === 'A') {
                  return (
                    <div
                      key={index}
                      className="d-flex flex-row justify-content-end mb-4"
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                        {value.userMessageDate}
                      </div>
                      <div
                        className="p-3 me-4 border"
                        style={{
                          borderRadius: '15px',
                          backgroundColor: 'rgba(57, 192, 237,.2)',
                          width: '50%',
                        }}
                      >
                        <p className="middle mb-0">{value.userMessage}</p>
                      </div>
                      <div>
                        <Avatar
                          sx={{ bgcolor: red[500], margin: '10px' }}
                          aria-label="recipe"
                          src={value.userImage}
                        />
                        <div>{value.userName}</div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className="d-flex flex-row justify-content-start mb-4"
                    >
                      <div>
                        <Avatar
                          sx={{ bgcolor: red[500], margin: '10px' }}
                          aria-label="recipe"
                          src={value.userImage}
                        />
                        <div style={{ width: 100 }}>{value.userName}</div>
                      </div>
                      <div
                        className="p-3 ms-3"
                        style={{
                          borderRadius: '15px',
                          backgroundColor: '#fbfbfb',
                          width: '50%',
                        }}
                      >
                        <p className="middle mb-0">{value.userMessage}</p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                        {value.userMessageDate}
                      </div>
                    </div>
                  );
                }
              })}
            </MDBCardBody>
            <TextField
              sx={{ width: '100%' }}
              placeholder="메시지를 입력해주세요..."
              multiline
              inputRef={messageContent}
              onKeyPress={sendMessage}
            />
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
