import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
/* eslint-disable */

function LoginPark() {
  return (
    <div className="bodyWrapper">
      <div className="wrapper">
        <div className="container">
          <div className="logo">WESTAGRAM</div>
          <div className="bar">
            <input
              type="text"
              id="id"
              placeholder=" 전화번호, 사용자 이름 또는 이메일"
            />
            <br />
            <input type="password" id="password" placeholder="비밀번호" />
            <button className="btn" type="submit" disabled>
              <Link to="/main">로그인</Link>
            </button>
          </div>
          <footer>
            <a href="findpw.html" className="findpsw">
              비밀번호를 잊으셨나요?
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default LoginPark;
