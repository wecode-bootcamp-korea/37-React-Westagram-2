import React from "react";

const Recommend = () => {
  return (
    <div className="recommend">
      <div className="recommend-head">
        <h2>회원님을 위한 추천</h2>
        <button className="recommend-all-btn" type="button">
          모두 보기
        </button>
      </div>
      {RECOMMEND_USER_LIST.map((recommendUser) => (
        <div className="recommend-others" key={recommendUser.id}>
          <div className="recommend-others-profile">
            <img
              className="img-profile-32px"
              src={`${process.env.PUBLIC_URL}/images/joohyerin/${recommendUser.profileImg}`}
              alt="프로필 이미지"
            />
            <div>
              <p className="others-profile-userId">{recommendUser.userId}</p>
              <p className="others-profile-follower">
                {recommendUser.followerId}님이 팔로우합니다
              </p>
            </div>
          </div>
          <button className="btn-blue" type="button">
            팔로우
          </button>
        </div>
      ))}
    </div>
  );
};

export default Recommend;

const RECOMMEND_USER_LIST = [
  {
    id: 1,
    userId: "watermelon_03",
    profileImg: "profile_watermelon.jpg",
    followerId: "apple_01",
  },
  {
    id: 2,
    userId: "lemon_04",
    profileImg: "profile_lemon.jpg",
    followerId: "candy_0426",
  },
];
