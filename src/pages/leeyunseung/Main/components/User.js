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

export const mainUser = [
  {
    id: 1,
    username: "yunseung_lee",
    img: "/images/Leeyunseung/dog.png",
  },
  {
    id: 2,
    username: "nanghyun_nam",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MDJfMTEg%2FMDAxNjU5Mzk5ODc1MTQ3.UY5cOYvg0Lz6PMzoMzwKOiqH56Xh069HxsNPy_i3u9Qg.M-33KjGoxDi2oT4lSVeirqL_jgu4KCDbjk4KZMtNtiYg.PNG.kbrs1219%2Fimage.png&type=sc960_832",
  },
  {
    id: 3,
    username: "hyerin_joo",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220131_229%2F1643571094523aHDvv_JPEG%2F44706990252007561_1303432131.jpg&type=sc960_832",
  },
  {
    id: 4,
    username: "youngtae_park",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjFfMjgx%2FMDAxNjYxMDkyNjk2NjY1.9GyS5mqM2kVcjl_Nrqctiui4MVqF12mZAtL3V5rIXL8g.Ffgpbq_GF6KtecE-Fl8qBcU3_-efrNFLb6TW6XEmkw4g.JPEG.sinae1096%2FIMG_5803.jpg&type=sc960_832",
  },
];

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
