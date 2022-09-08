import React, { useState } from "react";
import Comment from "./Comment";

function Feeds(props) {
  // console.log(props.feed.src);
  const [commentInputValue, setCommentValue] = useState("");
  const [commentArray, setCommentArray] = useState([]);

  const clear = () => {
    setCommentValue("");
  };

  const saveComment = (event) => {
    // console.log(event.target.value);
    setCommentValue(event.target.value);
    // console.log(typeof setCommentValue);
  };

  const createArray = (event) => {
    event.preventDefault();
    setCommentArray((prevList) => [...prevList, commentInputValue]);
    //console.log(commentInputValue, commentArray);
    clear();
  };

  const commentList = commentArray.map((value, index) => {
    return <Comment value={value} key={index} />;
  });

  return (
    <div className="feeds">
      <article key={props.feed.id}>
        <div className="topSection">
          <div className="profileInfo">
            <div className="profileImgBox">
              <img src={props.feed.profile} alt="profile" />
            </div>
            <div className="profileTextBox">
              <span>wecode</span>
            </div>
          </div>
          <div className="profileMore">
            <i className="fa-solid fa-ellipsis" />
          </div>
        </div>

        <div className="imageSection">
          <img src={props.feed.src} alt="Bag" />
        </div>

        <div className="likeSection">
          <div className="iconBoxWrap iconBoxWrap1">
            <div className="iconBox">
              <i className="fa-solid fa-heart" />
              <i className="fa-regular fa-comment" />
              <i className="fa-solid fa-arrow-up-from-bracket" />
            </div>
          </div>

          <div className="iconBoxWrap iconBoxWrap2">
            <div className="iconBox">
              <i className="fa-regular fa-bookmark" />
            </div>
          </div>
        </div>

        <div className="feedId">
          <img src={props.feed.profile} alt="profile" />
          <div>
            <span>{props.feed.userId}</span>
            <span>님 외 10명이 좋아합니다</span>
          </div>
        </div>

        <div className="feedboxWrap">
          <ul className="feedBox">{commentList}</ul>
        </div>

        <div className="feedTimeBox">
          <span className="feedTime">45분 전</span>
        </div>

        <form onSubmit={createArray} className="feedInputBox">
          <input
            type="text"
            id="feedInput"
            value={commentInputValue}
            onChange={saveComment}
            placeholder="댓글 달기..."
          />
          <button type="submit" id="submitButton">
            게시
          </button>
        </form>
      </article>
    </div>
  );
}

export default Feeds;
