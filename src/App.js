import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import GlobalStyles from "./styles/GlobalStyles";
import Login from "./pages/Login"
import Calender from "./pages/Calender"
import MyPage from "./pages/MyPage";
import Modal from "./pages/Modal";
import Diary from "./pages/Diary";
import Main from "./pages/Main";
import ReviseInfo from "./pages/ReviseInfo";
import Join from "./pages/Join";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/" element={<Root />}>
          <Route path="" element={<Main />} />
          <Route path="calender" element={<Calender />} />
          <Route path="calender/modal" element={<Modal/>}/>
          <Route path="calender/diary" element={<Diary/>}/> 
          <Route path="calender/diary/:date" element={<Diary/>}/>      
          <Route path="myPage" element={<MyPage />} />
          <Route path="reviseInfo" element={<ReviseInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
