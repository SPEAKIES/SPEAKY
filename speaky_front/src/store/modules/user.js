// 액션 타입(문자열)
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

// 로그인, 로그아웃 액션 생성 함수
export function login(loginInfo) {
  const user = loginInfo;
  const userString = JSON.stringify(user);
  window.localStorage.setItem('user', userString);

  return {
    type: LOGIN,
    payload: loginInfo,
  };
}

export function logout() {
  window.localStorage.removeItem('user');
  return {
    type: LOGOUT,
  };
}

// 초기 상태 설정
const initState = {
  userEmail: '',
  id: '',
  userName: '',
  userImg: '',
  isLogin: false,
  isTutor: false,
};

// 리듀서
export default function users(state = initState, action) {
  switch (action.type) {
    // login 함수가 dipatch 에 의해 전달 되면 백엔드 서로 부터 받은 email, nickname 정보를 세팅하고
    // 제일 중요한 isLogin 값을 true 로 변경, 해당 값은 Header 및 Item 페이지에서 로그인 여부를 판단하는
    // 값이 되어 해당 값에 따라 조건부 처리
    case LOGIN:
      if (action.payload.isTutor) {
        return {
          ...state,
          userEmail: action.payload.email,
          userImg: action.payload.userImg,
          userName: action.payload.userName,
          id: action.payload.id,
          isLogin: true,
          isTutor: action.payload.isTutor          
        };
      } else {
        return {
          ...state,
          userEmail: action.payload.email,
          id: action.payload.id,
          isLogin: true,
        };
      }
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    default:
      const user = JSON.parse(window.localStorage.getItem('user'));

      if (state.userEmail !== '') {
        return state;
      } else if (user) {
        return {
          ...state,
          isLogin: true,
          userEmail: user.email,
          userName: user.userName,
          userImg: user.userImg,
          id: user.id,
          isTutor: user.isTutor,
        }
      } else {
        return state;
      }
  }
}
