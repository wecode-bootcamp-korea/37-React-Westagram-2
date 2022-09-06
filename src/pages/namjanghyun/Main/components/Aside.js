import React from "react";
import { WESTA_INFO_LIST_LI } from "./uiData";

function Aside() {
  const westaInfoList = WESTA_INFO_LIST_LI.map((infoList) => {
    return <li key={infoList.id}>{infoList.menuName}</li>;
  });
  return (
    <aside className="main-right">
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
            <img src="/images/namjanghyun/profile_img.png" alt="userImg" />
            <div>
              <span>_yum_s</span>
              <span>16분전</span>
            </div>
          </div>
          <div className="userInfo">
            <img src="/images/namjanghyun/profile_img.png" alt="userImg" />
            <div>
              <span>_yum_s</span>
              <span>16분전</span>
            </div>
          </div>
          <div className="userInfo">
            <img src="/images/namjanghyun/profile_img.png" alt="userImg" />
            <div>
              <span>_yum_s</span>
              <span>16분전</span>
            </div>
          </div>
          <div className="userInfo">
            <img src="/images/namjanghyun/profile_img.png" alt="userImg" />
            <div>
              <span>_yum_s</span>
              <span>16분전</span>
            </div>
          </div>
          <div className="userInfo">
            <img src="/images/namjanghyun/profile_img.png" alt="userImg" />
            <div>
              <span>_yum_s</span>
              <span>16분전</span>
            </div>
          </div>
          <div className="userInfo">
            <img src="/images/namjanghyun/profile_img.png" alt="userImg" />
            <div>
              <span>_yum_s</span>
              <span>16분전</span>
            </div>
          </div>
          <div className="userInfo">
            <img src="/images/namjanghyun/profile_img.png" alt="userImg" />
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
        <ul>{westaInfoList}</ul>
        <span>© 2022 Westagram</span>
      </div>
    </aside>
  );
}

export default Aside;
