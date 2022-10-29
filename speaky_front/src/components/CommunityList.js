import React from 'react';
import Userlist from './Userlist';
export default function CommunityList() {
  const userListdata = [
    { userName: '강한솔', userComment: '나 코딩 제일잘함', language: '영어' },
    {
      userName: '모승환',
      userComment: '안녕하세요 요새 FPS게임 재밌다... 취업하고 싶다..',
      language: '일본어',
    },
    { userName: '이민정', userComment: '오버워치 장인', language: '영어' },
    { userName: '천해성', userComment: '네카라쿠배당토', language: '한국어' },
  ];

  return (
    <>
      <div style={{ width: '100%' }}>
        {userListdata.map((value, index) => (
          <Userlist key={index} data={value} />
        ))}
      </div>
    </>
  );
}
