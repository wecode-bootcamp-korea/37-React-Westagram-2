import React, { useState } from "react";
import "./Main.scss";
import Header from "./components/Header";
import Feeds from "./components/Feeds";

function Main() {
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
    // console.log(commentInputValue, commentArray);
    ViewComment();
    clear();
  };

  function ViewComment() {
    let commentList = commentArray.map((elements, index) => {
      return (
        <li key={index}>
          <div className="feedWrap">
            <span id="feedId">canon_mj</span>
            <span id="feed">{elements}</span>
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
    });

    return commentList;
  }

  return (
    <div className="containerWrapperMain">
      <Header />
      <main className="main">
        <div className="mainWrap">
          <Feeds
            commentInputValue={commentInputValue}
            saveComment={saveComment}
            createArray={createArray}
            ViewComment={ViewComment}
          />

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
