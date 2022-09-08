import React from "react";

const Comment = ({ content, changeHeartImg, deleteChat }) => {
  return (
    <div>
      <p className="comment-text">{content}</p>
      <div
        onClick={changeHeartImg}
        className="comment-likeIcon"
        alt="좋아요 아이콘"
      />
      <div
        onClick={deleteChat}
        className="comment-deleteIcon"
        alt="삭제 아이콘"
      />
    </div>
  );
};

export default Comment;
