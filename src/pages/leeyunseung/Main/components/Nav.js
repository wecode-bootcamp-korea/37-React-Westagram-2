import React from "react";
import "./Nav.scss";

function Nav() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src="/images/Leeyunseung/logo.png" alt="icon" />
        <p>Wesartgram</p>
      </div>
      <div className="nav-center">
        <img src="/images/Leeyunseung/navsearch.png" alt="icon" />
        <input className="navbar-input" type="text" placeholder="검색" />
      </div>
      <div className="nav-right">
        <img src="/images/Leeyunseung/search.png" alt="icon" />
        <img src="/images/Leeyunseung/heart.png" alt="icon" />
        <img src="/images/Leeyunseung/mypage.png" alt="icon" />
      </div>
    </div>
  );
}

export default Nav;
