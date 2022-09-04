import React from "react";
import "./Article.scss";

function Article({ children }) {
  return (
    <div className="article">
      {children}
      <div className="main-image" />
      <div className="icon-container">
        <img src="/images/Leeyunseung/redheart.png" alt="icon" />
        <img src="/images/Leeyunseung/chat.png" alt="icon" />
        <img src="/images/Leeyunseung/upload.png" alt="icon" />
        <img
          className="save-icon"
          src="/images/Leeyunseung/save.png"
          alt="icon"
        />
      </div>
      <div className="like-icon-box">
        <img src="/images/Leeyunseung/mypage.png" alt="img" />
        <p>aineword님 외 10명이 좋아합니다</p>
      </div>
      <ul className="comment-container">
        <li> 여기에 댓글이 들어갑니다</li>
        <li> 여기에 댓글이 들어갑니다</li>
      </ul>
      <div className="comment-input-container">
        <input
          className="commnet-input"
          type="text"
          placeholder="댓글 달기..."
        />
        <button className="commnet-button" type="submit">
          게시
        </button>
      </div>
    </div>
  );
}

export default Article;
