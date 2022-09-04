import React, { useState } from "react";
import Comment from "./Comment";
import "./Article.scss";

function Article({ children }) {
  const [comment, setComment] = useState("");

  const inputComment = (e) => {
    setComment(e.target.value);
  };

  const [commentList, setCommentList] = useState([]);

  const makeComment = (e) => {
    e.preventDefault();
    setCommentList([...commentList, comment]);
    setComment("");
  };

  const inputKeyUp = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      e.preventDefault();
      setCommentList([...commentList, comment]);
      setComment("");
    }
  };

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
        {commentList.map((value, idx) => {
          return <Comment key={idx} content={value} />;
        })}
      </ul>
      <div className="comment-input-container">
        <input
          value={comment}
          onChange={inputComment}
          className="commnet-input"
          type="text"
          placeholder="댓글 달기..."
          onKeyPress={inputKeyUp}
        />
        <button className="commnet-button" onClick={makeComment}>
          게시
        </button>
      </div>
    </div>
  );
}

export default Article;
