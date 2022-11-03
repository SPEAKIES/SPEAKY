const initState = {
  FollowListData: [
    { userName: '강한솔', userImage: '경로' },
    { userName: '모승환', userImage: '경로' },
    { userName: '이민정', userImage: '경로' },
    { userName: '천해성', userImage: '경로' },
  ],
  checkListdata: ['한국어', '영어', '중국어', '일본어'],
  communityListdata: [
    { userName: '강한솔', userComment: '나 코딩 제일잘함', language: '영어' },
    {
      userName: '모승환',
      userComment: '안녕하세요 요새 FPS게임 재밌다... 취업하고 싶다..',
      language: '일본어',
    },
    { userName: '이민정', userComment: '오버워치 장인', language: '영어' },
    { userName: '천해성', userComment: '네카라쿠배당토', language: '한국어' },
  ],
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
