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

export default function FollowList() {
  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[1, 2, 3, 4].map((value,idx) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
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
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Line item ${idx + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
