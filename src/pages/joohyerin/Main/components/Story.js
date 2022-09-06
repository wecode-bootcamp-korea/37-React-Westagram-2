import React from "react";

const Story = () => {
  return (
    <div className="box-story">
      {userInfoList.map((userInfo) => {
        return (
          <li key={userInfo.id}>
            <img
              className="img-profile-56px img-story"
              src={`${process.env.PUBLIC_URL}/images/joohyerin/${userInfo.imgSrc}`}
              alt="프로필 이미지"
            />
            <p className="name-story">{userInfo.userId}</p>
          </li>
        );
      })}
    </div>
  );
};
export default Story;

const userInfoList = [
  { id: 1, userId: "apple_01", imgSrc: "profile_apple.jpg" },
  { id: 2, userId: "peach_02", imgSrc: "profile_peach.jpg" },
];
