import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Nav
import Nav from "./components/Nav/Nav";

// 주혜린의 컴포넌트
import LoginJoo from "./pages/joohyerin/Login/Login";
import MainJoo from "./pages/joohyerin/Main/Main";

// 이윤승의 컴포넌트
import LoginLee from "./pages/leeyunseung/Login/Login";
import MainLee from "./pages/leeyunseung/Main/Main";

// 남장현의 컴포넌트
import LoginNam from "./pages/namjanghyun/Login/Login";
import MainNam from "./pages/namjanghyun/Main/Main";

// 박영태의 컴포넌트
import LoginPark from "./pages/parkyoungtae/Login/Login";
import MainPark from "./pages/parkyoungtae/Main/Main";

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />

        <Route path="/login-joo" element={<LoginJoo />} />
        <Route path="/main-joo" element={<MainJoo />} />

        <Route path="/login-lee" element={<LoginLee />} />
        <Route path="/main-lee" element={<MainLee />} />

        <Route path="/login-nam" element={<LoginNam />} />
        <Route path="/main-nam" element={<MainNam />} />

        <Route path="/login-park" element={<LoginPark />} />
        <Route path="/main-park" element={<MainPark />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
