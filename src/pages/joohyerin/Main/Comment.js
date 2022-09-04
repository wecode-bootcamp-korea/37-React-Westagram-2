import React from "react";

const Comment = ({ content, changeHeartImg, deleteChat }) => {
  return (
    <div>
      <p className="text-comment">{content}</p>
      <div
        onClick={changeHeartImg}
        className="img-heart-comment"
        alt="좋아요 아이콘"
      />
      <div
        onClick={deleteChat}
        className="img-delete-comment"
        alt="삭제 아이콘"
      />
    </div>
  );
};

export default Comment;
