const initState = {
  CardData: [
    {
      image: 'images/1번.jpg',
      userName: '강한솔',
      userImage: '경로',
      contentDate: '1일',
      contentHeart: 10,
      cardContent: '1번 글 내용입니다.',
    },

    {
      image: 'images/2번.jpg',
      userName: '모승환',
      userImage: '경로',
      contentDate: '5일',
      contentHeart: 23,
      cardContent: '2번 글 내용입니다.',
    },

    {
      image: 'images/3번.jpg',
      userName: '이민정',
      userImage: '경로',
      contentDate: '14일',
      contentHeart: 51,
      cardContent: '3번 글 내용입니다.',
    },

    {
      image: 'images/3번.jpg',
      userName: '천해성',
      contentDate: '20일',
      contentHeart: 4,
      userImage: '경로',
      cardContent: '4번 글 내용입니다.',
    },
  ],
  FollowListData: [
    { userName: '강한솔', userImage: '경로' },
    { userName: '모승환', userImage: '경로' },
    { userName: '이민정', userImage: '경로' },
    { userName: '천해성', userImage: '경로' },
  ],
  checkListdata: ['1일', '1주일', '한달', '1년'],
};

// 액션 타입(문자열)
const INIT = 'freeBoard/INIT';
const CHECK = 'freeBoard/CHECK';
const NEXT = 'freeBoard/NEXT';
const RESET = 'freeBoard/RESET';

// 액션 생성 함수
// payload -> 선택에 다른 결과 값 result 전달 필요
export function check(result) {
  return {
    type: CHECK,
    payload: { result },
  };
}
export function next() {
  return {
    type: NEXT,
  };
}
export function reset() {
  return {
    type: RESET,
  };
}
export function init(data) {
  return {
    type: INIT,
    payload: data,
  };
}

//리듀서
// 리듀서
export default function freeBoard(state = initState, action) {
  switch (action.type) {
    case CHECK:
      return {
        ...state,
        mbtiResult: state.mbtiResult + action.payload.result,
      };
    case NEXT:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET:
      return {
        ...state,
        page: 0,
        mbtiResult: '',
      };
    case INIT:
      return {
        ...state,
        survey: action.payload.survey,
        explanation: action.payload.explanation,
      };

    default:
      return state;
  }
}
