import React from 'react';
import Userlist from './Userlist';
import { useDispatch, useSelector } from 'react-redux';

export default function CommunityList() {
  const communityListdata = useSelector(
    (state) => state.community.communityListdata,
  );

  return (
    <>
      <div style={{ width: '100%' }}>
        {communityListdata.map((value, index) => (
          <Userlist key={index} data={value} />
        ))}
      </div>
    </>
  );
}
