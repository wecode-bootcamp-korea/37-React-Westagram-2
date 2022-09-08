import React, { useState } from "react";
import Comment from "./Comment";

const Feed = ({ profileImage, userId, location, feedImage }) => {
  let [id, setId] = useState(0);
  const [chat, setChat] = useState("");
  const [chatList, setChatList] = useState([]);
  const changeChat = (event) => {
    setChat(event.target.value);
  };
  const saveChat = (event) => {
    event.preventDefault();
    setId((prev) => prev + 1);
    setChatList([...chatList, { id: id, content: chat }]);
    setChat("");
  };
  const changeHeartImg = (event) => {
    if (event.target.className === "comment-likeIcon") {
      event.target.className = "comment-coloredLikeIcon";
    } else {
      event.target.className = "comment-likeIcon";
    }
  };
  const deleteChat = (event) => {
    event.target.parentNode.remove();
  };

  return (
    <article className="feed">
      <div className="feed-head">
        <div className="feed-profile">
          <img
            className="img-profile-32px"
            src={`${process.env.PUBLIC_URL}/images/joohyerin/${profileImage}`}
            alt="프로필 이미지"
          />
          <div>
            <p className="feed-userId">{userId}</p>
            <p className="feed-location">{location}</p>
          </div>
        </div>
        <img
          className="icon-more"
          src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/more.png`}
          alt="더보기 아이콘"
        />
      </div>

      <img
        className="feed-img"
        src={`${process.env.PUBLIC_URL}/images/joohyerin/${feedImage}`}
        alt="피드 이미지"
      />

      <div className="feed-icons">
        <div>
          <img
            className="feed-icon"
            src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/heart.png`}
            alt="하트 아이콘"
          />
          <img
            className="feed-icon"
            src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/chat.png`}
            alt="댓글 아이콘"
          />
          <img
            className="feed-icon"
            src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/send.png`}
            alt="다이렉트 메시지 아이콘"
          />
        </div>
        <img
          className="feed-icon"
          src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/bookmark.png`}
          alt="북마크 아이콘"
        />
      </div>

      <p className="feed-countLike">좋아요 120개</p>

      <div className="feed-comment">
        {chatList.map((value) => (
          <Comment
            key={value.id}
            content={value.content}
            changeHeartImg={changeHeartImg}
            deleteChat={deleteChat}
          />
        ))}
      </div>

      <div className="feed-wrapInput">
        <img
          className="feed-icon"
          src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/smile.png`}
          alt="이모지 아이콘"
        />
        <form>
          <input
            value={chat}
            onChange={changeChat}
            className="feed-input"
            type="text"
            placeholder="댓글 달기..."
          />
          <button onClick={saveChat} className="feed-saveBtn">
            게시
          </button>
        </form>
      </div>
    </article>
  );
};

export default Feed;
