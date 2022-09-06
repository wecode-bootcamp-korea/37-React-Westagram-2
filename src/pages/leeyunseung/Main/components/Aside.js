import React from "react";
import User, { recommendUserList, storyUserList } from "./User";
import Footer from "./Footer";
import "./Aside.scss";

function Aside() {
  return (
    <div className="aside">
      <header>
        <img src="/images/Leeyunseung/wecode.png" alt="aside-header-img" />
        <div className="header-info">
          <p className="header-name">wecode_bootcamp</p>
          <p className="header-description">WeCode | 위코드</p>
        </div>
      </header>
      <div className="story-container">
        <div className="story-title">
          <p className="story-name">스토리</p>
          <p className="story-view">모두 보기</p>
        </div>
        {storyUserList.map(({ username, img, description }, idx) => (
          <User
            key={`${username}-${idx}`}
            img={img}
            username={username}
            description={description}
          />
        ))}
      </div>
      <div className="user-container">
        <div className="user-title">
          <p className="user-name">회원님을 위한 추천</p>
          <p className="user-view">모두 보기</p>
        </div>
        {recommendUserList.map(
          ({ username, img, description, followLink }, idx) => (
            <User
              key={`${username}-${idx}`}
              img={img}
              username={username}
              description={description}
              followLink={followLink}
            />
          )
        )}
      </div>
      <div className="aside-info-container">
        <Footer />
        <p className="aside-info-footer">ⓒ 2022 WESTARGRAM</p>
      </div>
    </div>
  );
}
export default Aside;
