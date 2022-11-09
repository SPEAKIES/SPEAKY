import React, { useEffect } from 'react';
import Header from '../components/Header';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import FollowList from '../components/FollowList';
import Chat from '../components/Chat';
import { useParams } from 'react-router-dom';
export default function ManagePage() {
  const drawerWidth = '15%';
  const FollowListData = [
    { userName: '강한솔', userImage: '경로' },
    { userName: '모승환', userImage: '경로' },
    { userName: '이민정', userImage: '경로' },
    { userName: '천해성', userImage: '경로' },
  ];
  const tutor = useParams().tutor;

  useEffect(() => {
    async function fetchData() {
      const getAllRes = await fetch(
        'http://localhost:4000/chat/allChat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tutor,
        }),
      });
      if (getAllRes.status === 200) {
        const data = await getAllRes.json();
        if (data) {
          console.log(data);
        }
      } else {
        throw new Error('통신 이상');
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Chat tutor={tutor} />
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
