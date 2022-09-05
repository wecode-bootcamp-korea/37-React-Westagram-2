import React from "react";

const Profile = () => {
  return (
    <div className="box-myProfile">
      <div>
        <img
          className="img-profile-56px"
          src={`${process.env.PUBLIC_URL}/images/joohyerin/profile_apple.jpg`}
          alt="프로필 이미지"
        />
        <p>candy_0426</p>
      </div>
      <button className="btn-blue" type="button">
        전환
      </button>
    </div>
  );
};

export default Profile;
