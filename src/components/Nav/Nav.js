import React from "react";
import "./Nav.scss";

function Nav() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src="/images/Nav/logo.png" alt="icon" />
        <p>Westagram</p>
      </div>
      <div className="nav-center">
        <img src="/images/Nav/navsearch.png" alt="icon" />
        <input className="navbar-input" type="text" placeholder="검색" />
      </div>
      <div className="nav-right">
        <img src="/images/Nav/search.png" alt="icon" />
        <img src="/images/Nav/heart.png" alt="icon" />
        <img src="/images/Nav/mypage.png" alt="icon" />
      </div>
    </div>
  );
}

export default Nav;
