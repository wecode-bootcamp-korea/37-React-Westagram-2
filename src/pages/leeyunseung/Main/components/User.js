import React from "react";
import { Link } from "react-router-dom";
import "./User.scss";

function User({
  username,
  img = "/images/Leeyunseung/mypage.png",
  description,
  followLink,
}) {
  return (
    <div className="user-box">
      <img className="user-img" src={img} alt="test" />
      <div className="user-info">
        <p className="user-name">{username}</p>
        {!!description && <p className="desc">{description}</p>}
      </div>
      {!!followLink && (
        <Link to={followLink} className="follow">
          팔로우
        </Link>
      )}
    </div>
  );
}

export default User;
