import React, { useState } from "react";
import Comment from "./Comment";
import User from "../components/User";
import "./Article.scss";

function Article({
  articleNum,
  mainImg,
  userList,
  commentList,
  addCommentByArticleNum,
}) {
  const [comment, setComment] = useState("");

  const inputValue = (e) => {
    setComment(e.target.value);
  };

  const addComment = () => {
    addCommentByArticleNum(articleNum, comment);
    setComment("");
  };

  const handleClickInput = (e) => {
    if (e.target.value.length > 0) addComment();
  };

  const handleKeyPressInput = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0) addComment();
  };

  return (
    <div className="article">
      {userList.map(({ username, img, id }) => (
        <User img={img} username={username} key={id} />
      ))}
      <img className="main-image" src={mainImg} alt="#" />
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
        {commentList.map((value, idx) => {
          return <Comment key={idx} content={value} />;
        })}
      </ul>
      <div className="comment-input-container">
        <input
          value={comment}
          onChange={inputValue}
          className="commnet-input"
          placeholder="댓글 달기..."
          onKeyPress={handleKeyPressInput}
        />
        <button
          className="commnet-button"
          value={comment}
          onClick={handleClickInput}
        >
          게시
        </button>
      </div>
    </div>
  );
}

export default Article;
