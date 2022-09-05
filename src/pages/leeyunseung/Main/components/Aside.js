import React from "react";
import User from "./User";
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
          <p className="user-name">스토리</p>
          <p className="user-view">모두 보기</p>
        </div>
        {userList.map(({ username, img, description, followLink }, idx) => (
          <User
            key={`${username}-${idx}`}
            img={img}
            username={username}
            description={description}
            followLink={followLink}
          />
        ))}
      </div>
      <div className="aside-info-container">
        <p>instagram 정보 · 지원 · 홍보센터 · API ·</p>
        <p>채용정보 · 개인정보처리방침 · 약관 ·</p>
        <p>디렉터리 · 프로필 · 해시태그 · 언어</p>
        <br />
        <p>ⓒ 2022 WESTARGRAM</p>
      </div>
    </div>
  );
}
export default Aside;

const storyUserList = [
  {
    username: "_ymm_s",
    img: "/images/Leeyunseung/mypage.png",
    description: "16분 전",
  },
  {
    username: "drink_eat_drink",
    img: "/images/Leeyunseung/mypage.png",
    description: "3시간 전",
  },
  {
    username: "jimlkkkkk",
    img: "/images/Leeyunseung/mypage.png",
    description: "1일 전",
  },
  {
    username: "hohohohohoho",
    img: "/images/Leeyunseung/mypage.png",
    description: "2일 전",
  },
  {
    username: "azdf_34",
    img: "/images/Leeyunseung/mypage.png",
    description: "일주일 전",
  },
];

const userList = [
  {
    username: "joaaaaa",
    img: "/images/Leeyunseung/mypage.png",
    description: "_legend_a님 외 2명이 좋아합니다.",
    followLink: "#",
  },
  {
    username: "nabbaaaaa",
    img: "/images/Leeyunseung/mypage.png",
    description: "Kkyem님이 좋아합니다.",
    followLink: "#",
  },
  {
    username: "wekkkkkk",
    img: "/images/Leeyunseung/mypage.png",
    description: "oo님이 좋아합니다.",
    followLink: "#",
  },
];
