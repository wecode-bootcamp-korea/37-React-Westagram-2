import React from "react";

const Nav = () => {
  return (
    <header>
      <h1>Westagram</h1>
      <div className="bar-search">
        <img
          className="img-explore"
          src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/explore.png`}
          alt="돋보기 아이콘"
        />
        <input className="input-searchBar" type="text" placeholder="검색" />
        <div className="box-filteredId">
          <div className="box-recentSearch">
            <p className="title-recentSearch">최근 검색 항목</p>
            <p className="content-recentSearch">최근 검색 내역 없음.</p>
          </div>
        </div>
      </div>
      <nav>
        <ul className="list-nav">
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/home.png`}
              alt="홈 아이콘"
            />
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/send.png`}
              alt="다이렉트 메시지 아이콘"
            />
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/add.png`}
              alt="게시물 추가 아이콘"
            />
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/compass.png`}
              alt="탐색 아이콘"
            />
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/heart.png`}
              alt="좋아요 아이콘"
            />
          </li>
          <li className="list-profile">
            <img
              className="img-navProfile"
              src={`${process.env.PUBLIC_URL}/images/joohyerin/profile_candy.jpg`}
              alt="프로필 이미지"
            />
            <div className="wrap-menu">
              <div className="menu-profile">
                <img
                  src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/user.png`}
                  alt="프로필 아이콘"
                />
                <p>프로필</p>
              </div>
              <div className="menu-bookmark">
                <img
                  src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/bookmark.png`}
                  alt="프로필 아이콘"
                />
                <p>저장됨</p>
              </div>
              <div className="menu-setting">
                <img
                  src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/setting.png`}
                  alt="프로필 아이콘"
                />
                <p>설정</p>
              </div>
              <div className="menu-change">
                <img
                  src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/change.png`}
                  alt="프로필 아이콘"
                />
                <p>계정 전환</p>
              </div>
              <div className="menu-logout">
                <p>로그아웃</p>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
