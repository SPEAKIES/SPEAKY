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
import ManagePage from './pages/ManagePage';
import { useSelector } from 'react-redux';
import Tutor from './components/Tutorpage/Tutor.js';
import Tutordetail from './components/Tutorpage/Tutordetail.js';
import ManageChat from './components/ManageChat';

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
        <Route path="/chat/:tutor" element={<ChatPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mypage" element={isLogin ? <Mypage /> : <Login />} />
        <Route path="/tutor" element={<Tutor />}></Route>
        <Route path="/tutor/:tutor" element={<Tutordetail />} />
        <Route path="/manage/:tutor" element={<ManagePage />}></Route>
        <Route path="/manage/chat/:tutor/:id" element={<ManageChat />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
