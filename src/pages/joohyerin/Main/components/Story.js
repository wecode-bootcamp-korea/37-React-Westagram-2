import React from "react";

const Story = () => {
  return (
    <div className="story">
      {USER_INFO_LIST.map((userInfo) => {
        return (
          <li key={userInfo.id}>
            <img
              className="img-profile-56px story-borderStyle"
              src={`${process.env.PUBLIC_URL}/images/joohyerin/${userInfo.profileImg}`}
              alt="프로필 이미지"
            />
            <p className="story-userId">{userInfo.userId}</p>
          </li>
        );
      })}
    </div>
  );
};
export default Story;

const USER_INFO_LIST = [
  { id: 1, userId: "apple_01", profileImg: "profile_apple.jpg" },
  { id: 2, userId: "peach_02", profileImg: "profile_peach.jpg" },
];
