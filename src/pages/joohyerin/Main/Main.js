import React, { useState } from "react";
import Comment from "./Comment";
import "../Main/Main.scss";

const MainJoo = () => {
  let [id, setId] = useState(0);
  const [chat, setChat] = useState("");
  const changeChat = (event) => {
    setChat(event.target.value);
  };
  const [chatList, setChatList] = useState([]);
  const saveChat = (event) => {
    event.preventDefault();
    setId((prev) => prev + 1);
    setChatList([...chatList, { id: id, content: chat }]);
    setChat("");
  };
  const changeHeartImg = (e) => {
    if (e.target.className === "img-heart-comment") {
      e.target.className = "img-fullHeart-comment";
    } else {
      e.target.className = "img-heart-comment";
    }
  };
  const deleteChat = (e) => {
    e.target.parentNode.remove();
  };

  return (
    <div className="main">
      <header>
        <h1>Westagram</h1>
        <div className="bar-search">
          <img
            className="img-explore"
            src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/explore.png`}
            alt="돋보기 아이콘"
          />
          <input className="input-searchBar" type="text" placeholder="검색" />
          <div className="box-filteredId">
            <div className="box-recentSearch">
              <p className="title-recentSearch">최근 검색 항목</p>
              <p className="content-recentSearch">최근 검색 내역 없음.</p>
            </div>
          </div>
        </div>
        <nav>
          <ul className="list-nav">
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/home.png`}
                alt="홈 아이콘"
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/send.png`}
                alt="다이렉트 메시지 아이콘"
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/add.png`}
                alt="게시물 추가 아이콘"
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/compass.png`}
                alt="탐색 아이콘"
              />
            </li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/heart.png`}
                alt="좋아요 아이콘"
              />
            </li>
            <li className="list-profile">
              <img
                className="img-navProfile"
                src={`${process.env.PUBLIC_URL}/images/joohyerin/profile_candy.jpg`}
                alt="프로필 이미지"
              />
              <div className="wrap-menu">
                <div className="menu-profile">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/user.png`}
                    alt="프로필 아이콘"
                  />
                  <p>프로필</p>
                </div>
                <div className="menu-bookmark">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/bookmark.png`}
                    alt="프로필 아이콘"
                  />
                  <p>저장됨</p>
                </div>
                <div className="menu-setting">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/setting.png`}
                    alt="프로필 아이콘"
                  />
                  <p>설정</p>
                </div>
                <div className="menu-change">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/change.png`}
                    alt="프로필 아이콘"
                  />
                  <p>계정 전환</p>
                </div>
                <div className="menu-logout">
                  <p>로그아웃</p>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div>
          <div className="box-story">
            <li>
              <img
                className="img-profile-56px img-story"
                src={`${process.env.PUBLIC_URL}/images/joohyerin/profile_apple.jpg`}
                alt="프로필 이미지"
              />
              <p className="name-story">apple_01</p>
            </li>
            <li>
              <img
                className="img-profile-56px img-story"
                src={`${process.env.PUBLIC_URL}/images/joohyerin/profile_peach.jpg`}
                alt="프로필 이미지"
              />
              <p className="name-story">peach_02</p>
            </li>
          </div>

          <div>
            <article className="box-feed">
              <div className="head-feed">
                <div className="profile-feed">
                  <img
                    className="img-profile-32px"
                    src={`${process.env.PUBLIC_URL}/images/joohyerin/profile_apple.jpg`}
                    alt="프로필 이미지"
                  />
                  <div>
                    <p className="userName-feed">apple_01</p>
                    <p className="location-feed">Seoul, Kroea</p>
                  </div>
                </div>
                <img
                  className="icon-more"
                  src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/more.png`}
                  alt="더보기 아이콘"
                />
              </div>

              <img
                className="img-feed"
                src={`${process.env.PUBLIC_URL}/images/joohyerin/feed_apple.jpg`}
                alt="피드 이미지"
              />

              <div className="icon-feed">
                <div>
                  <img
                    className="img-icon"
                    src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/heart.png`}
                    alt="하트 아이콘"
                  />
                  <img
                    className="img-icon"
                    src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/chat.png`}
                    alt="댓글 아이콘"
                  />
                  <img
                    className="img-icon"
                    src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/send.png`}
                    alt="다이렉트 메시지 아이콘"
                  />
                </div>
                <img
                  className="img-icon"
                  src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/bookmark.png`}
                  alt="북마크 아이콘"
                />
              </div>

              <p className="text-like">좋아요 120개</p>

              <div className="box-comment">
                {chatList.map((value) => (
                  <Comment
                    key={value.id}
                    content={value.content}
                    changeHeartImg={changeHeartImg}
                    deleteChat={deleteChat}
                  />
                ))}
              </div>

              <div className="box-chat">
                <img
                  className="img-icon"
                  src={`${process.env.PUBLIC_URL}/images/joohyerin/icon/smile.png`}
                  alt="이모지 아이콘"
                />
                <form>
                  <input
                    value={chat}
                    onChange={changeChat}
                    className="input-chat"
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <button onClick={saveChat} className="btn-chat">
                    게시
                  </button>
                </form>
              </div>
            </article>
          </div>
        </div>

        <div className="box-aside">
          <div className="box-myProfile">
            <div>
              <img
                className="img-profile-56px"
                src={`${process.env.PUBLIC_URL}/images/joohyerin/profile_apple.jpg`}
                alt="프로필 이미지"
              />
              <p>candy_0426</p>
            </div>
            <button className="btn-blue" type="button">
              전환
            </button>
          </div>

          <div className="box-recommend">
            <div className="head-recommend">
              <h2>회원님을 위한 추천</h2>
              <button className="btn-recommend-all" type="button">
                모두 보기
              </button>
            </div>
            <div className="box-recommend-profile">
              <div className="profile-recommend">
                <img
                  className="img-profile-32px"
                  src={`${process.env.PUBLIC_URL}/images/joohyerin/profile_watermelon.jpg`}
                  alt="프로필 이미지"
                />
                <div>
                  <p className="userName-recommend">watermelon_03</p>
                  <p className="follower-recommend">
                    apple_01님이 팔로우합니다
                  </p>
                </div>
              </div>
              <button className="btn-blue" type="button">
                팔로우
              </button>
            </div>
            <div className="box-recommend-profile">
              <div className="profile-recommend">
                <img
                  className="img-profile-32px"
                  src={`${process.env.PUBLIC_URL}/images/joohyerin/profile_lemon.jpg`}
                  alt="프로필 이미지"
                />
                <div>
                  <p className="userName-recommend">lemon_04</p>
                  <p className="follower-recommend">
                    candy_0426님이 팔로우합니다
                  </p>
                </div>
              </div>
              <button className="btn-blue" type="button">
                팔로우
              </button>
            </div>
          </div>
          <div className="footer">
            <div className="footer-info">
              {/* <a href="#">소개 ·</a>
                <a href="#">도움말 ·</a>
                <a href="#">홍보센터 ·</a>
                <a href="#">API ·</a>
                <a href="#">채용 정보 ·</a>
                <a href="#">개인정보처리방침 ·</a>
                <a href="#">약관 ·</a>
                <a href="#">위치 ·</a>
                <a href="#">언어</a> */}
            </div>
            <p>©2022 WESTAGRAM FROM HYERIN</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainJoo;
