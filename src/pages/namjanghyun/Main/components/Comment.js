import React from "react";

function Comment(props, index) {
  // console.log(props);
  return (
    <li key={index}>
      <div className="feedWrap">
        <span id="feedId">canon_mj</span>
        <span id="feed">{props.value}</span>
        <span id="feedMore">더 보기</span>
      </div>
      <div className="feedIconWrap">
        <span className="trashIcon">
          <i className="fa-regular fa-trash-can" />
        </span>
        <span className="heartIcon">
          <i className="fa-regular fa-heart" />
        </span>
      </div>
    </li>
  );
}

export default Comment;
