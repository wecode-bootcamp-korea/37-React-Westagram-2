import React from "react";
import "./Main.scss";
/* eslint-disable */

function MainPark() {
  return (
    <div className="wrapper_main">
      <nav className="main-navigation">
        <div className="nav-box">
          <div className="logoinstagram">
            <img
              src="/images/parkyoungtae/instagram.png"
              alt="instagram"
              className="nav-img1"
            />
            <div className="logo">
              <span>
                <h1>Westagram</h1>
              </span>
            </div>
          </div>

          <div className="search-box">
            <div className="input-border">
              <input className="text" type="text" placeholder="검색" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="nav-icons">
            <a href="#">
              <img
                src="/images/parkyoungtae/compass1.png"
                alt="compass"
                className="nav-imgs"
              />
            </a>
            <a href="#">
              <img
                src="/images/parkyoungtae/heart.png"
                alt="heart"
                className="nav-imgs"
              />
            </a>
            <a href="#">
              <img
                src="/images/parkyoungtae/profile1.png"
                alt="profile"
                className="nav-imgs"
              />
            </a>
          </div>
        </div>
      </nav>

      <div className="main">
        <div className="feeds">
          <article className="article">
            <div className="article-header">
              <div className="profiles">
                <div className="profile-img">
                  <a href="^^">
                    <img
                      src="/images/parkyoungtae/cat.png"
                      className="stories"
                    />
                  </a>
                  <span className="profile-id"> 0taepark</span>
                </div>

                <div className="article-dog">
                  <img
                    src="/images/parkyoungtae/dog3.png"
                    alt="story"
                    className="dog"
                  />
                </div>
              </div>
              <div className="article-img">
                <img
                  src="/images/parkyoungtae/fullheart.png"
                  className="article-imgs"
                />
                <img
                  src="/images/parkyoungtae/comment.png"
                  className="article-imgs"
                />
                <img
                  src="/images/parkyoungtae/share.png"
                  className="article-imgs"
                />
                <img
                  src="/images/parkyoungtae/storage.png"
                  className="article-img1"
                />
              </div>
            </div>

            <div className="article-like">
              <a href="#">0taepark </a> 님<a href="#"> 여러 명</a>이 좋아합니다
            </div>
            <div className="article-content">
              <div className="article-reply">
                <div className="feeds-commit">
                  <p>
                    <a href="#" className="name">
                      0taepark
                    </a>
                    &nbsp; &nbsp; ?뭐해?
                  </p>
                  <ul id="comment-wrapper"></ul>
                </div>

                <form className="comment">
                  <input
                    type="text"
                    placeholder="댓글 달기..."
                    id="commentInput"
                  />
                  <button id="submit">게시</button>
                </form>
              </div>
            </div>
          </article>
        </div>

        <div className="main-right">
          <div className="right-">
            <div className="right-header">
              <a href="^^">
                <img src="/images/parkyoungtae/cat.png" className="stories" />
              </a>
              <span className="profile-id">
                <a
                  href="
                  #"
                >
                  0taepark{" "}
                </a>
              </span>
              <span>영 태 榮 太</span>
            </div>
            <div className="people-story">
              <div className="story-fullview">
                <span className="story-recommend">스토리</span>{" "}
                <span className="story-view">
                  <a href="#" className>
                    {" "}
                    모두 보기{" "}
                  </a>
                </span>
              </div>
              <div className="story-box">
                <img src="/images/parkyoungtae/cat.png" className="stories1" />
                <span className="merge">
                  _yums_s
                  <br />
                  16분 전
                </span>
              </div>
              <div className="story-box">
                <img src="/images/parkyoungtae/cat.png" className="stories1" />
                <span className="merge">
                  {" "}
                  dringk_eat_drink
                  <br />
                  3시간 전
                </span>
              </div>
              <div className="story-box">
                <img src="/images/parkyoungtae/cat.png" className="stories1" />
                <span className="merge">
                  hyukyc
                  <br />
                  20시간 전
                </span>
              </div>
              <div className="story-box">
                <img src="/images/parkyoungtae/cat.png" className="stories1" />
                <span className="merge">
                  jminkeek
                  <br />
                  23시간 전
                </span>
              </div>
              <div className="story-box">
                <img src="/images/parkyoungtae/cat.png" className="stories1" />
                <span className="merge">
                  duuuu.01
                  <br />
                  23시간 전
                </span>
              </div>
            </div>

            <div className="recommend">
              <div className="person-recommend">
                <span className="story-recommend">회원님을 위한 추천</span>
                <span className="story-view1">
                  <a href="#">모두 보기</a>
                </span>
              </div>
              <div className="story-box">
                <img src="/images/parkyoungtae/cat.png" className="stories1" />
                <span className="merge">
                  _yums_s
                  <br />
                  dfsnkl님 외 2명
                </span>
              </div>
              <div className="story-box">
                <img src="/images/parkyoungtae/cat.png" className="stories1" />
                <span className="merge">
                  _yums_s
                  <br />
                  123님 외 12명
                </span>
              </div>
              <div className="story-box">
                <img src="/images/parkyoungtae/cat.png" className="stories1" />
                <span className="merge">
                  _yums_s
                  <br />
                  dfke님 외 1명
                </span>
              </div>
            </div>
            <div className="footer">
              Instgram 정보 지원 홍보센터 API <br />
              채용정보 개인정보처리방침 약관
              <br />
              디렉터리 프로필 해시태그 언어
              <br />
              <br /> 2022 INSTAGRAM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainPark;
