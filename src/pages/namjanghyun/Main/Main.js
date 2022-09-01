import "./main.scss";

function Main() {
  return (
    <div className="containerWrapperMain">
      <header className="header">
        <nav className="navigation">
          <div className="logo">
            <i className="fa-brands fa-instagram" />
            <h1>Westagram</h1>
          </div>
          <div className="searchBox">
            <input type="text" className="searchInput" placeholder="검색" />
          </div>
          <div className="navIconBox">
            <i className="fa-regular fa-compass" />
            <i className="fa-regular fa-heart" />
            <i className="fa-regular fa-user" />
          </div>
        </nav>
      </header>

      <main className="main">
        <div className="mainWrap">
          <div className="feeds">
            <article>
              <div className="topSection">
                <div className="profileInfo">
                  <div className="profileImgBox">
                    <img
                      src="/images/namjanghyun/profile_img.png"
                      alt="profile"
                    />
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
                <ul className="feedBox" />
              </div>

              <div className="feedTimeBox">
                <span className="feedTime">45분 전</span>
              </div>

              <form className="feedInputBox">
                <input type="text" id="feedInput" placeholder="댓글 달기..." />
                <button type="submit" id="submitButton">
                  게시
                </button>
              </form>
            </article>
          </div>

          <div className="main-right">
            <div className="userInfo">
              <img src="/images/namjanghyun/profile_img.png" alt="userImg" />
              <div className="userInfoText">
                <span>wecode_bootcamp</span>
                <span>남장현 | 위코드</span>
              </div>
            </div>

            <div className="story">
              <div className="title">
                <span>스토리</span>
                <span>모두 보기</span>
              </div>
              <div className="infoWrap">
                <div className="userInfo">
                  <img
                    src="/images/namjanghyun/profile_img.png"
                    alt="userImg"
                  />
                  <div>
                    <span>_yum_s</span>
                    <span>16분전</span>
                  </div>
                </div>
                <div className="userInfo">
                  <img
                    src="/images/namjanghyun/profile_img.png"
                    alt="userImg"
                  />
                  <div>
                    <span>_yum_s</span>
                    <span>16분전</span>
                  </div>
                </div>
                <div className="userInfo">
                  <img
                    src="/images/namjanghyun/profile_img.png"
                    alt="userImg"
                  />
                  <div>
                    <span>_yum_s</span>
                    <span>16분전</span>
                  </div>
                </div>
                <div className="userInfo">
                  <img
                    src="/images/namjanghyun/profile_img.png"
                    alt="userImg"
                  />
                  <div>
                    <span>_yum_s</span>
                    <span>16분전</span>
                  </div>
                </div>
                <div className="userInfo">
                  <img
                    src="/images/namjanghyun/profile_img.png"
                    alt="userImg"
                  />
                  <div>
                    <span>_yum_s</span>
                    <span>16분전</span>
                  </div>
                </div>
                <div className="userInfo">
                  <img
                    src="/images/namjanghyun/profile_img.png"
                    alt="userImg"
                  />
                  <div>
                    <span>_yum_s</span>
                    <span>16분전</span>
                  </div>
                </div>
                <div className="userInfo">
                  <img
                    src="/images/namjanghyun/profile_img.png"
                    alt="userImg"
                  />
                  <div>
                    <span>_yum_s</span>
                    <span>16분전</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="userRecommend">
              <div className="title">
                <span>회원님을 취한 추천</span>
                <span>모두 보기</span>
              </div>
              <div className="userInfo">
                <img src="/images/namjanghyun/profile_img.png" alt="userImg" />
                <div>
                  <span>joaaaaaaahye</span>
                  <span>_leqend_a님 외 2명이 ...</span>
                </div>
                <span>팔로우</span>
              </div>
              <div className="userInfo">
                <img src="/images/namjanghyun/profile_img.png" alt="userImg" />
                <div>
                  <span>joaaaaaaahye</span>
                  <span>_leqend_a님 외 2명이 ...</span>
                </div>
                <span>팔로우</span>
              </div>
              <div className="userInfo">
                <img src="/images/namjanghyun/profile_img.png" alt="userImg" />
                <div>
                  <span>joaaaaaaahye</span>
                  <span>_leqend_a님 외 2명이 ...</span>
                </div>
                <span>팔로우</span>
              </div>
            </div>

            <div className="westaInfo">
              <p>
                Westagram 정보 &middot; 지원홍보 센터 &middot; API &middot;
                채용정보 &middot; 개인정보처리방침 &middot; 약관 &middot;
                디렉터리 &middot; 프로필 &middot; 해시태그 &middot; 언어
              </p>
              <p>© 2022 Westagram</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
