import React from "react";

function Header(props) {
  return (
    <header className="header">
      <nav className="navigation">
        <div className="logo">
          <i className="fa-brands fa-instagram" />
          <h1>Westagram</h1>
        </div>
        <div className="searchBox">
          <input type="text" className="searchInput" placeholder="검색" />
        </div>
        <div className="navIconBox">
          <i className="fa-regular fa-compass" />
          <i className="fa-regular fa-heart" />
          <i className="fa-regular fa-user" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
