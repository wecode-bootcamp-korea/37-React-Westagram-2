import React from "react";

const Comment = ({ content }) => {
  return (
    <div>
      <p className="text-comment">{content}</p>
      <img
        className="img-heart-comment"
        src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/heart.png`}
        alt="좋아요 아이콘"
      />
      <img
        className="img-delete-comment"
        src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/delete.png`}
        alt="삭제 아이콘"
      />
    </div>
  );
};

export default Comment;
