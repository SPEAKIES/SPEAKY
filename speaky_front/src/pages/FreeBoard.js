import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import BoardCard from '../components/BoardCard';
import ListSubheader from '@mui/material/ListSubheader';
import FollowList from '../components/FollowList';
import CheckboxList from '../components/CheckboxList';
import WirteModal from '../components/WirteModal';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import { curdate } from '../components/time';
const drawerWidth = '15%';

export default function FreeBoard() {
  const state = useSelector((state) => state.user);
  const [FBData, setFBData] = useState([]);
  const [commentdata, setCommentdata] = useState([]);
  const FollowListData = useSelector((state) => state.freeBoard.FollowListData);
  const checkListdata = useSelector((state) => state.freeBoard.checkListdata);
  const [update, setUpdate] = useState(false);
  const [checkdate, setCheckdate] = useState('1일');
  const updateHandler = () => {
    if (update === true) {
      setUpdate(false);
    } else {
      setUpdate(true);
    }
  };
  const dateHandler = (data) => {
    setCheckdate(data);
  };
  useEffect(() => {
    console.log(checkdate);
    async function fetchData() {
      const freeBoardData = await fetch('http://localhost:4000/freeBoard');
      if (freeBoardData.status === 200) {
        const result = await freeBoardData.json();
        setFBData(result);
        if (result) {
          console.log(result);
        }
      } else {
        throw new Error('통신 이상');
      }
    }
    async function fetchData2() {
      const commentdata = await fetch(
        'http://localhost:4000/freeBoard/댓글데이터',
      );
      if (commentdata.status === 200) {
        const result = await commentdata.json();
        setCommentdata(result);
        if (result) {
          console.log(result);
        }
      } else {
        throw new Error('통신 이상');
      }
    }
    fetchData();
    fetchData2();
  }, [update, checkdate]);

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
          <CheckboxList data={checkListdata} check={dateHandler} />
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
          {FBData.reverse().map((value, index) => (
            <BoardCard
              key={index}
              data={value}
              update={updateHandler}
              comment={commentdata}
            />
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
