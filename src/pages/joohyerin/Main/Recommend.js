import React from "react";

const Recommend = () => {
  return (
    <div className="box-recommend">
      <div className="head-recommend">
        <h2>회원님을 위한 추천</h2>
        <button className="btn-recommend-all" type="button">
          모두 보기
        </button>
      </div>
      <div className="box-recommend-profile">
        <div className="profile-recommend">
          <img
            className="img-profile-32px"
            src={`${process.env.PUBLIC_URL}/images/joohyerin/profile_watermelon.jpg`}
            alt="프로필 이미지"
          />
          <div>
            <p className="userName-recommend">watermelon_03</p>
            <p className="follower-recommend">apple_01님이 팔로우합니다</p>
          </div>
        </div>
        <button className="btn-blue" type="button">
          팔로우
        </button>
      </div>
      <div className="box-recommend-profile">
        <div className="profile-recommend">
          <img
            className="img-profile-32px"
            src={`${process.env.PUBLIC_URL}/images/joohyerin/profile_lemon.jpg`}
            alt="프로필 이미지"
          />
          <div>
            <p className="userName-recommend">lemon_04</p>
            <p className="follower-recommend">candy_0426님이 팔로우합니다</p>
          </div>
        </div>
        <button className="btn-blue" type="button">
          팔로우
        </button>
      </div>
    </div>
  );
};

export default Recommend;
