import React from "react";

function Aside() {
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
        {/* <p>
          Westagram 정보 &middot; 지원홍보 센터 &middot; API &middot; 채용정보
          &middot; 개인정보처리방침 &middot; 약관 &middot; 디렉터리 &middot;
          프로필 &middot; 해시태그 &middot; 언어
        </p> */}
        <ul>
          {WESTA_INFO_LIST_LI.map((infoList) => {
            return <li key={infoList.id}>{infoList.menuName}</li>;
          })}
        </ul>
        <span>© 2022 Westagram</span>
      </div>
    </aside>
  );
}

export default Aside;

const WESTA_INFO_LIST_LI = [
  { id: 1, menuName: "Westagram 정보" },
  { id: 2, menuName: "지원홍보 센터" },
  { id: 3, menuName: "API" },
  { id: 4, menuName: "채용정보" },
  { id: 5, menuName: "개인정보처리방침" },
  { id: 6, menuName: "약관" },
  { id: 7, menuName: "디렉터리" },
  { id: 8, menuName: "프로필" },
  { id: 9, menuName: "해시태그" },
  { id: 10, menuName: "언어" },
];
