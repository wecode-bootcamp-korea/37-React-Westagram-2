import React from "react";

const Nav = () => {
  return (
    <header>
      <h1>Westagram</h1>
      <div className="header-search">
        <img
          className="header-search-icon"
          src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/explore.png`}
          alt="돋보기 아이콘"
        />
        <input className="header-search-input" type="text" placeholder="검색" />
      </div>
      <nav>
        <ul className="nav-list">
          {navIconSrc.map((icon) => (
            <li key={icon.id}>
              <img
                src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/${icon.src}`}
                alt="Nav 아이콘"
              />
            </li>
          ))}
          <li>
            <img
              className="nav-list-profile-img"
              src={`${process.env.PUBLIC_URL}/images/joohyerin/profile_candy.jpg`}
              alt="프로필 이미지"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

const navIconSrc = [
  { id: 1, src: "home.png" },
  { id: 2, src: "send.png" },
  { id: 3, src: "add.png" },
  { id: 4, src: "compass.png" },
  { id: 5, src: "heart.png" },
];
