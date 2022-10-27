import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
export default function Userlist(props) {

  const navigate = useNavigate();
  const profileClick = () =>{
    navigate('/profile',{
      state: {
        data: 'A',
      }
    })
  }
  const chatClick = () =>{
    navigate('/chat',{
      state: {
        data: 'A',
      }
    })
  }
  return (
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="A" src="해당 유저 이미지 경로" />
        </ListItemAvatar>
        <ListItemText
          primary={props.data.userName}
          secondary={
            <React.Fragment> 
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              {props.data.language}
              </Typography>
            </React.Fragment>
          }
        />
        <div style={{width:'45vw'}}>{props.data.userComment}</div>
        <button onClick={profileClick}>프로필</button>
        <button onClick={chatClick}>채팅</button>

      </ListItem>
      <Divider variant="fullWidth" component="li" />
    </List>
  );
}
