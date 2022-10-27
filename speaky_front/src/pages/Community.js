import React from 'react'
import Header from '../components/Header'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListSubheader  from '@mui/material/ListSubheader';
import FollowList from '../components/FollowList';
import CheckboxList from '../components/CheckboxList';
import CommunityList from '../components/CommunityList';
const drawerWidth = '15%';

export default function Community() {
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
  const checkListdata =['한국어','영어', '중국어', '일본어']
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
        <CheckboxList data ={checkListdata}/>
        <Divider />
        
      </Drawer>
      <CommunityList/>
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
      </Drawer>
    </Box>
    </>
  )
}
