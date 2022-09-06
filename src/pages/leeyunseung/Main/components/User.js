import React from "react";
import { Link } from "react-router-dom";
import "./User.scss";

function User({
  username,
  img = "/images/Leeyunseung/mypage.png",
  description,
  followLink,
}) {
  return (
    <div className="user-box">
      <img className="user-img" src={img} alt="test" />
      <div className="user-info">
        <p className="user-name">{username}</p>
        {!!description && <p className="desc">{description}</p>}
      </div>
      {!!followLink && (
        <Link to={followLink} className="follow">
          팔로우
        </Link>
      )}
    </div>
  );
}

export default User;

export const mainUser = {
  username: "yunseung_lee",
  img: "/images/Leeyunseung/dog.png",
};

export const storyUserList = [
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

export const recommendUserList = [
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
