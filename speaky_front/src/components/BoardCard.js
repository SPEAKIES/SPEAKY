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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextField from '@mui/material/TextField';
import Comment from './Comment';
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
  const comment = useRef(); //댓글 남기기 내용.

  const commentCheck = (e) => {
    if (e.key === 'Enter') {
      console.log(comment.current.value);
      comment.current.value = '';
    }
  };

  const [expanded, setExpanded] = useState(false);
  const [heartCheck, setHeartCheck] = useState(false);
  const [heart, setHeart] = useState(props.data.contentHeart);
  const handleExpandClick = () => {
    setExpanded(!expanded);
    //댓글 데이터베이스 가지고 와야함.
  };
  //하트 부분 클릭했을때 fetch로 하트 증가 시켜주고 나서 하트 갯수 data를 다시 받아야함.
  const heartClick = () => {
    if (heartCheck) {
      setHeart(heart - 1);
      setHeartCheck(false);
    } else {
      setHeart(heart + 1);
      setHeartCheck(true);
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
        action={
          <IconButton aria-label="settings">
            <HighlightOffIcon />
          </IconButton>
        }
        title={props.data.userName}
        subheader={props.data.contentDate}
      />
      <div onClick={handleExpandClick}>
        <CardMedia
          component="img"
          height="300"
          image={props.data.image}
          alt="그림사진"
        />
        <CardContent sx={{ fontSize: '20px' }}>
          {props.data.cardContent}
        </CardContent>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={heartClick}>
          {heartCheck ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          <div>{heart}</div>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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
              onKeyPress={commentCheck}
            />
          </div>
          <Comment />
        </CardContent>
      </Collapse>
    </Card>
  );
}
