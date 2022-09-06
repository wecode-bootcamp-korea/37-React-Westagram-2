import React from "react";

function Recommend() {
  const recommendList = RECOMMEND_LIST_DIV.map((recommendInfo) => {
    return (
      <div key={recommendInfo.id} className="userInfo">
        <img src={recommendInfo.src} alt="userImg" />
        <div>
          <span>{recommendInfo.id}</span>
          <span>
            {recommendInfo.userId}님 외 {recommendInfo.otherFollowers}명이 ...
          </span>
        </div>
        <span>팔로우</span>
      </div>
    );
  });

  return (
    <div className="userRecommend">
      <div className="title">
        <span>회원님을 취한 추천</span>
        <span>모두 보기</span>
      </div>
      {recommendList}
    </div>
  );
}

export default Recommend;

const RECOMMEND_LIST_DIV = [
  {
    id: "joaaaaaaahye5",
    src: "/images/namjanghyun/profile_img.png",
    userId: "_leqend_e",
    otherFollowers: "34",
  },
  {
    id: "joaaaaaaahye4",
    src: "/images/namjanghyun/profile_img.png",
    userId: "_leqend_d",
    otherFollowers: "97",
  },
  {
    id: "joaaaaaaahye3",
    src: "/images/namjanghyun/profile_img.png",
    userId: "_leqend_c",
    otherFollowers: "51",
  },
  {
    id: "joaaaaaaahye2",
    src: "/images/namjanghyun/profile_img.png",
    userId: "_leqend_b",
    otherFollowers: "21",
  },
  {
    id: "joaaaaaaahye1",
    src: "/images/namjanghyun/profile_img.png",
    userId: "_leqend_a",
    otherFollowers: "70",
  },
];
