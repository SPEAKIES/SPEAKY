// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// PrimeReact
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import FreeBoard from './pages/FreeBoard';
import Study from './pages/Study';
import Community from './pages/Community';
import NotFound from './components/NotFound';
import FirstPage from './pages/FirstPage';
import Profile from './pages/Profile';
import ChatPage from './pages/ChatPage';
import Login from './components/Login.js';
import '../src/App.css';
import Mypage from './components/Mypages/Mypage';
import MypageStudy from './components/Mypages/Study';
import { useSelector } from 'react-redux';
import Tutor from './components/Tutorpage/Tutor.js';
import Tutordetail from './components/Tutorpage/Tutordetail.js';
function App() {
  const isLogin = useSelector((state) => state.user.isLogin);

  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/board" element={<FreeBoard />} />
        <Route path="/study" element={<Study />} />
        <Route path="/community" element={<Community />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mypage" element={isLogin ? <Mypage /> : <Login />} />
        <Route path="/mypage/study" element={<MypageStudy />}></Route>
        <Route path="/tutor" element={<Tutor />}></Route>
        <Route path="/tutor/profile" element={<Tutordetail />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
