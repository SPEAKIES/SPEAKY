import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Userlist(props) {
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
        <button>채팅</button>
        <button>프로필</button>

      </ListItem>
      <Divider variant="fullWidth" component="li" />
    </List>
  );
}
