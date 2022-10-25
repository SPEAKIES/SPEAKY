import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import BoardCard from '../components/BoardCard';
import ListSubheader  from '@mui/material/ListSubheader';
import FollowList from '../components/FollowList';
import CheckboxList from '../components/CheckboxList';
import WirteModal from '../components/WirteModal';

import Header from '../components/Header';
const drawerWidth = '15%';

export default function FreeBoard() {
  //메신저 올라온 글 한테 보내줘야하는 데이터.
  const CardData = [
    {image:'images/1번.jpg',
    userName:'강한솔',
    userImage:'경로',
    contentDate:'1일',
    contentHeart:10,
    cardContent:'1번 글 내용입니다.'},

    {image:'images/2번.jpg',
    userName:'모승환',
    userImage:'경로',
    contentDate:'5일',
    contentHeart:23,
    cardContent:'2번 글 내용입니다.'},

    {image:'images/3번.jpg',
    userName:'이민정',
    userImage:'경로',
    contentDate:'14일',
    contentHeart:51,
    cardContent:'3번 글 내용입니다.'},

    {image:'images/3번.jpg',
    userName:'천해성',
    contentDate:'20일',
    contentHeart:4,
    userImage:'경로',
    cardContent:'4번 글 내용입니다.'},];


    //친구창 데이터
  const FollowListData= [
    {userName:'강한솔',
    userImage:'경로',},
    {userName:'모승환',
    userImage:'경로',},
    {userName:'이민정',
    userImage:'경로',},
    {userName:'천해성',
    userImage:'경로',},

  ]


  return (
    <>
    <Header/>
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          display:{xs:'none',sm:'none',md:'block'},
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            marginTop:9.6,
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
        
      </Drawer>

      <Box
        component="main"
        sx={{display:'flex', flexDirection: 'column',alignItems: 'center',  flexGrow: 1, bgcolor: '#dcdcdc', p: 3}}
      >
        <Toolbar />
        {CardData.map((value, index) => (
          <BoardCard key={index} data={value}/>
        ))}
      </Box>

      <Drawer
        sx={{
          display:{xs:'none',sm:'none',md:'block'},
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            marginTop:9.6,
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
        <FollowList data={FollowListData}/>
        <Divider />
        <WirteModal/>
      </Drawer>

    </Box>
    </>
  );
}
