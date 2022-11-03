import React from 'react';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
export default function Comment(props) {
  const contentComment = useSelector((state) => state.freeBoard.contentComment);
  return (
    <>
      {contentComment.map((value, index) => {
        if (props.index === value.contentIndex) {
          return (
            <div
              key={index}
              style={{
                display: 'flex',
                backgroundColor: '#F2F3F5',
                borderRadius: 20,
              }}
            >
              <Avatar
                sx={{ bgcolor: red[500], margin: '10px' }}
                aria-label="recipe"
              >
                사진
              </Avatar>
              <div>
                <div style={{ fontSize: 13 }}>{value.userName}</div>
                <div style={{ fontSize: 18 }}>{value.userComment}</div>
              </div>
            </div>
          );
        } else {
          return <div key={index}></div>;
        }
      })}
    </>
  );
}
