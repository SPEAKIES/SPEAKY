import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
function notificationsLabel(count) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

export default function FollowList(props) {
  return (
    <List
      dense
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    >
      {props.data.map((value, idx) => {
        return (
          <ListItem
            key={idx}
            secondaryAction={
              <IconButton aria-label={notificationsLabel(100)}>
                <Badge badgeContent={100} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                {/* 프로필 이미지 크기는 40x40 */}
                <Avatar alt={'이미지'} src={value.userImage} />
              </ListItemAvatar>
              <ListItemText id={idx} primary={value.userName} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
