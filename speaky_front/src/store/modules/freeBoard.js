const initState = {
  FollowListData: [
    { userId: 'A', userName: '강한솔', userImage: '경로' },
    { userId: 'B', userName: '모승환', userImage: '경로' },
    { userId: 'C', userName: '이민정', userImage: '경로' },
    { userId: 'D', userName: '천해성', userImage: '경로' },
  ],
  checkListdata: ['1일', '1주일', '한달', '1년'],
};

// 액션 타입(문자열)
const INIT = 'freeBoard/INIT';
const NEWCONTENT = 'freeBoard/NEWCONTENT';
const COMMENTINIT = 'freeBoard/COMMENTINIT';
// 액션 생성 함수
// payload -> 선택에 다른 결과 값 result 전달 필요

export function init(data) {
  return {
    type: INIT,
    payload: data,
  };
}
export function commentInit(data) {
  return {
    type: COMMENTINIT,
    payload: data,
  };
}
export function NewContent(data) {
  return {
    type: NEWCONTENT,
    payload: data,
  };
}

//리듀서
// 리듀서
export default function freeBoard(state = initState, action) {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        FollowListData: action.payload.FollowListData,
        checkListdata: action.payload.checkListdata,
      };
    case NEWCONTENT:
      return {
        ...state,
        CardData: [action.payload, ...state.CardData],
      };
    default:
      return state;
  }
}
