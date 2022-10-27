import React from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router';
export default function Profile() {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
    <Header/>
    <div style={{height:500, marginTop:'79px'}}>Profile</div>
    </>
  )
}
