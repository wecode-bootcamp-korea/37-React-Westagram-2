import React from "react";

function Story() {
  const storyList = STORY_LIST_DIV.map((storyInfo) => {
    return (
      <div key={storyInfo.id} className="userInfo">
        <img src={storyInfo.src} alt="userImg" />
        <div>
          <span>{storyInfo.id}</span>
          <span>{storyInfo.time}</span>
        </div>
      </div>
    );
  });

  return (
    <div className="story">
      <div className="title">
        <span>스토리</span>
        <span>모두 보기</span>
      </div>
      <div className="infoWrap">{storyList}</div>
    </div>
  );
}

export default Story;

const STORY_LIST_DIV = [
  {
    id: "_yum_s9",
    src: "/images/namjanghyun/profile_img.png",
    time: "1분전",
  },
  {
    id: "_yum_s8",
    src: "/images/namjanghyun/profile_img.png",
    time: "5분전",
  },
  {
    id: "_yum_s7",
    src: "/images/namjanghyun/profile_img.png",
    time: "7분전",
  },
  { id: "_yum_s6", src: "/images/namjanghyun/profile_img.png", time: "11분전" },
  { id: "_yum_s5", src: "/images/namjanghyun/profile_img.png", time: "20분전" },
  { id: "_yum_s4", src: "/images/namjanghyun/profile_img.png", time: "43분전" },
  {
    id: "_yum_s3",
    src: "/images/namjanghyun/profile_img.png",
    time: "한시간전",
  },
  {
    id: "_yum_s2",
    src: "/images/namjanghyun/profile_img.png",
    time: "두시간전",
  },
  {
    id: "_yum_s1",
    src: "/images/namjanghyun/profile_img.png",
    time: "세시간전",
  },
];
