import React from "react";

function Feeds({ commentInputValue, saveComment, createArray, ViewComment }) {
  return (
    <div className="feeds">
      <article>
        <div className="topSection">
          <div className="profileInfo">
            <div className="profileImgBox">
              <img src="/images/namjanghyun/profile_img.png" alt="profile" />
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
          <img src="/images/namjanghyun/feed_img.jpg" alt="Bag" />
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
          <img src="/images/namjanghyun/profile_img.png" alt="profile" />
          <div>
            <span>aineworl</span>
            <span>님 외 10명이 좋아합니다</span>
          </div>
        </div>

        <div className="feedboxWrap">
          <ul className="feedBox">
            <ViewComment />
          </ul>
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
