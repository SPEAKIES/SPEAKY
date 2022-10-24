import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
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
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `100%`, px: `${drawerWidth}` }}
      >
        <Toolbar >
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          display:{xs:'none',sm:'none',md:'block'},
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <Divider />
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
        <CheckboxList/>

        <Divider />
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
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
        {images.map((image) => (
          <BoardCard img={image}/>
        ))}

      </Box>
      <Drawer
        sx={{
          display:{xs:'none',sm:'none',md:'block'},
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
       
        <Divider />
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
        <FollowList/>
        <Divider />
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
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
