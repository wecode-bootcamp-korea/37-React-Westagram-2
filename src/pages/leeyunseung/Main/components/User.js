import React from "react";
import { Link } from "react-router-dom";
import "./User.scss";

// img (있을수도 있고 없을수도 있다.) => undefined, null
// description (있을수도 있고 없을수도 있다.)
// followLink (있을수도 있고 없을수도 있다.)

// function User(props) {}
// props => { ... } => {children, ...}
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
