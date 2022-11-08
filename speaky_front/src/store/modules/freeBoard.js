const initState = {
  CardData: [
    {
      contentIndex: 1,
      userId: 'A',
      image: 'images/1번.jpg',
      userName: '강한솔',
      userImage: '경로',
      contentDate: '1일',
      contentHeart: 10,
      cardContent: '1번 글 내용입니다.',
    },

    {
      contentIndex: 2,
      userId: 'B',
      image: 'images/2번.jpg',
      userName: '모승환',
      userImage: '경로',
      contentDate: '5일',
      contentHeart: 23,
      cardContent: '2번 글 내용입니다.',
    },

    {
      contentIndex: 3,
      userId: 'C',
      image: 'images/3번.jpg',
      userName: '이민정',
      userImage: '경로',
      contentDate: '14일',
      contentHeart: 51,
      cardContent: '3번 글 내용입니다.',
    },

    {
      contentIndex: 4,
      userId: 'D',
      image: 'images/3번.jpg',
      userName: '천해성',
      contentDate: '20일',
      contentHeart: 4,
      userImage: '경로',
      cardContent: '4번 글 내용입니다.',
    },
  ],
  FollowListData: [
    { userId: 'A', userName: '강한솔', userImage: '경로' },
    { userId: 'B', userName: '모승환', userImage: '경로' },
    { userId: 'C', userName: '이민정', userImage: '경로' },
    { userId: 'D', userName: '천해성', userImage: '경로' },
  ],
  checkListdata: ['1일', '1주일', '한달', '1년'],
  contentComment: [
    {
      contentIndex: 1,
      userName: '모승환',
      userImage: '유저이미지',
      userComment: '흐음...',
    },
    {
      contentIndex: 1,
      userName: '김철수',
      userImage: '유저이미지',
      userComment: '개노맛..',
    },
    {
      contentIndex: 2,
      userName: '보거스',
      userImage: '유저이미지',
      userComment: '이 음식 너무 맛있어요..',
    },
    {
      contentIndex: 4,
      userName: '짜미',
      userImage: '유저이미지',
      userComment: '음식 너무 싫엉...',
    },
  ],
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
        CardData: action.payload.Carddata,
        FollowListData: action.payload.FollowListData,
        checkListdata: action.payload.checkListdata,
      };
    case NEWCONTENT:
      return {
        ...state,
        CardData: [action.payload, ...state.CardData],
      };
    case COMMENTINIT:
      return {
        ...state,
        contentComment: [action.payload, ...state.contentComment],
      };
    default:
      return state;
  }
}
