import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import BoardCard from '../components/BoardCard';
import ListSubheader  from '@mui/material/ListSubheader';
import FollowList from '../components/FollowList';
import CheckboxList from '../components/CheckboxList';
import WirteModal from '../components/WirteModal';
const drawerWidth = '15%';

export default function FreeBoard() {
  const images = ['images/1번.jpg','images/2번.jpg','images/3번.jpg']
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          display:{xs:'none',sm:'none',md:'block'},
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            marginTop:9.5,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <Divider />
        <ListSubheader component="div" id="nested-list-subheader">
          날짜
        </ListSubheader>
        <CheckboxList/>

        <Divider />
        <ListSubheader component="div" id="nested-list-subheader">
          2번
        </ListSubheader>
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
      </Drawer>
      <Box
        component="main"
        sx={{display:'flex', flexDirection: 'column',alignItems: 'center',  flexGrow: 1, bgcolor: 'background.default', p: 3}}
      >
        <Toolbar />
        {images.map((image,index) => (
          <BoardCard key={index} img={image}/>
        ))}
      </Box>
      <Drawer
        sx={{
          display:{xs:'none',sm:'none',md:'block'},
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            marginTop:9.5,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
       
        <Divider />
        <ListSubheader component="div" id="nested-list-subheader">
          친구창
        </ListSubheader>
        <FollowList/>
        <Divider />

        <ListSubheader component="div" id="nested-list-subheader">
          4번
        </ListSubheader>
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <WirteModal/>
      </Drawer>
    </Box>
  );
}
