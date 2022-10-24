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
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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

  return (
    <Card sx={{ maxWidth: 680 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <div onClick={handleExpandClick}>
        <CardMedia
          component="img"
          height="194"
          image={props.img}
          alt="그림사진"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" fontSize="20px">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
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
        댓글창
        </CardContent>
      </Collapse>
    </Card>
  );
}
