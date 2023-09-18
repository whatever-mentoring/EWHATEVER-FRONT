import { FakeMainPage } from 'pages';
import Main from 'pages/Main';
import { Mypage } from 'pages/Mypage';
import { MyComment } from 'pages/Mypage/MyComment';
import { MyQna } from 'pages/Mypage/MyQna';
import { MyScrap } from 'pages/Mypage/MyScrap';
import { Provision } from 'pages/Mypage/Provision';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/myPage" element={<Mypage />} />
        <Route path="/myPage/myQna" element={<MyQna />} />
        <Route path="/myPage/myComment" element={<MyComment />} />
        <Route path="/myPage/myScrap" element={<MyScrap />} />
        <Route path="/myPage/provision" element={<Provision />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
