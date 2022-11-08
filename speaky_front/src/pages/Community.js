import React, { useEffect } from 'react';
import Header from '../components/Header';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import FollowList from '../components/FollowList';
import CheckboxList from '../components/CheckboxList';
import CommunityList from '../components/CommunityList';
import { useDispatch, useSelector } from 'react-redux';
const drawerWidth = '15%';

export default function Community() {
  const FollowListData = useSelector((state) => state.community.FollowListData);
  const checkListdata = useSelector((state) => state.community.checkListdata);
  const dispatch = useDispatch();
  useEffect(() => {
        // async function fetchData() {
    //   const freeBoardData = await fetch('http://localhost:3000/freeBoard');
    //   if (freeBoardData.status === 200) {
    //     const data = await freeBoardData.json();
    //     if (data) {
    //       console.log(data);
    //     }
    //   } else {
    //     throw new Error('통신 이상');
    //   }
    // }
    // fetchData();
    //fetch get방식으로 데이터 가져오기.
    // dispatch('fetch로 가져온 데이터를 init 액션해서 데이터 store에 상태 저장.')
  });
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
