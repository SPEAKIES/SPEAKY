import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import BoardCard from '../components/BoardCard';
import ListSubheader from '@mui/material/ListSubheader';
import FollowList from '../components/FollowList';
import CheckboxList from '../components/CheckboxList';
import WirteModal from '../components/WirteModal';
import { useSelector, useDispatch } from 'react-redux';
import { init } from '../store/modules/freeBoard';
import Header from '../components/Header';
const drawerWidth = '15%';

export default function FreeBoard() {
  const CardData = useSelector((state) => state.freeBoard.CardData);
  const FollowListData = useSelector((state) => state.freeBoard.FollowListData);
  const checkListdata = useSelector((state) => state.freeBoard.checkListdata);
  const dispatch = useDispatch();
  useEffect(() => {
    //fetch get방식으로 데이터 가져오기
    // dispatch(init()); //이런식으로 redux 정보 dispatch 해서 처음에 get 요청 보내서 받은 데이터를 store에 저장
  }, [dispatch]);

  return (
    <>
      <Header />
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

        <Box
          component="main"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexGrow: 1,
            bgcolor: '#dcdcdc',
            p: 3,
          }}
        >
          <Toolbar />
          {CardData.map((value, index) => (
            <BoardCard key={index} data={value} />
          ))}
        </Box>

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
          <WirteModal />
        </Drawer>
      </Box>
    </>
  );
}
