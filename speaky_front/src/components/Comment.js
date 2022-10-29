import React from 'react';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
export default function Comment(props) {
  return (
    <div
      style={{ display: 'flex', backgroundColor: '#F2F3F5', borderRadius: 20 }}
    >
      <Avatar sx={{ bgcolor: red[500], margin: '10px' }} aria-label="recipe">
        사진
      </Avatar>
      <div>
        <div style={{ fontSize: 13 }}>유저 이름</div>
        <div style={{ fontSize: 18 }}>댓글 내용</div>
      </div>
    </div>
  );
}
