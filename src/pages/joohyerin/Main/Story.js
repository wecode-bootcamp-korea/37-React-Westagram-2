import React from "react";

const Story = () => {
  return (
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
  );
};

export default Story;
