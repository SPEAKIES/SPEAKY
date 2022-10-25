import * as React from 'react';
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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextField from '@mui/material/TextField';

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
  const [expanded, setExpanded] = React.useState(false);
  const [heartCheck,setHeartCheck] =React.useState(false);
  const [heart,setHeart] = React.useState(0);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const heartClick = () =>{
    if(heartCheck){
      setHeart(heart-1);
      setHeartCheck(false);
    }
    else{
      setHeart(heart+1);
      setHeartCheck(true);
    }
  }
  const CardStyle={
    maxWidth: 680,
    marginTop:'20px'
}

  return (
    <Card sx={CardStyle}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            사진
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="유저 이름"
        subheader="1일"
      />
      <div onClick={handleExpandClick}>
        <CardMedia
          component="img"
          height="194"
          image={props.img}
          alt="그림사진"
        />
        <CardContent sx={{fontSize:'20px',width:'35vw'}} >
          글 내용
        </CardContent>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={heartClick}>
          {heartCheck ? <FavoriteIcon/> :<FavoriteBorderIcon/>}
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
      <Collapse in={expanded} timeout="auto" unmountOnExit >
        <CardContent style={{fontSize: '20px'}}>
        <div style={{display:'flex'}}>
        <Avatar sx={{ bgcolor: red[500], margin:'10px'}} aria-label="recipe">
            사진
          </Avatar>
          <TextField
          sx={{width:'100%'}}
          id="outlined-textarea"
          placeholder="댓글을 입력해주세요..."
          multiline
        />
        </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
