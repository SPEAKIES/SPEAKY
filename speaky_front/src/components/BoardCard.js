import React from 'react';
import { useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TextField from '@mui/material/TextField';
import Comment from './Comment';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BoardCard(props) {
  const state = useSelector((state) => state.user);
  const comment = useRef(); //댓글 남기기 내용.

  const DeleteCard = () => {
    if (props.data.userName === state.id) {
      return (
        <IconButton
          aria-label="settings"
          onClick={() => deleteClick(props.data.contentIndex)}
        >
          <HighlightOffIcon />
        </IconButton>
      );
    } else {
      return '';
    }
  };
  const commentCheck = async () => {
    const res = await fetch('http://localhost:4000/reply/write', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        comment: comment.current.value,
        contentIndex: props.data.contentIndex,
        userName: state.id,
      }),
    });
    props.update();
    comment.current.value = '';
  };

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const deleteClick = async (contentIndex) => {
    console.log(contentIndex);
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: contentIndex }),
    };
    const response = await fetch(
      `http://localhost:4000/freeBoard/delete/${contentIndex}`,
      requestOptions,
    );
    const data = await response.json();
    if (data) {
      console.log(`data : ${data}`);
      props.update();
    } else {
      throw new Error('통신 이상');
    }
  };
  const CardStyle = {
    maxWidth: 680,
    marginTop: '20px',
    width: 500,
  };

  return (
    <Card sx={CardStyle}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={props.data.userImage}
          />
        }
        action={<DeleteCard />}
        title={props.data.userName}
        subheader={props.data.contentDate}
      />
      <div onClick={handleExpandClick}>
        <CardMedia
          component="img"
          height="300"
          image={`http://localhost:4000/images/${props.data.image}`}
          alt="그림사진"
        />
        <CardContent sx={{ fontSize: '20px' }}>
          {props.data.cardContent}
        </CardContent>
      </div>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{ fontSize: '20px' }}>
          <div style={{ display: 'flex' }}>
            <Avatar
              sx={{ bgcolor: red[500], margin: '10px' }}
              aria-label="recipe"
              src={props.data.userImage}
            >
              사진
            </Avatar>
            <TextField
              sx={{ width: '100%' }}
              id="outlined-textarea"
              placeholder="댓글을 입력해주세요..."
              multiline
              inputRef={comment}
            />
            <Button
              variant="contained"
              size="large"
              onClick={commentCheck}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </div>
          <Comment index={props.data.contentIndex} comment={props.comment} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
