import React from 'react';
import Header from '../components/Header';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import FollowList from '../components/FollowList';
import CheckboxList from '../components/CheckboxList';
import CommunityList from '../components/CommunityList';
import { useSelector } from 'react-redux';
const drawerWidth = '15%';

export default function Community() {
  const FollowListData = useSelector((state) => state.community.FollowListData);
  const checkListdata = useSelector((state) => state.community.checkListdata);

  return (
    <>
      <Header />
      <div style={{ height: '74px' }}></div>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' },
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              marginTop: 9.6,
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
          <CheckboxList data={checkListdata} />
          <Divider />
        </Drawer>
        <CommunityList />
        <Drawer
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' },
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              marginTop: 9.6,
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
          <FollowList data={FollowListData} />
          <Divider />
        </Drawer>
      </Box>
    </>
  );
}
