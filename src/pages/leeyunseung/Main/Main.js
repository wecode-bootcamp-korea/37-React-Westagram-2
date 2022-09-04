import React from "react";
import "./Main.scss";
import Nav from "../Main/components/Nav";
import Aside from "../Main/components/Aside";
import Article from "../Main/components/Article";
import User from "./components/User";

function MainLee() {
  const mainUser = [
    {
      username: "yunseung_lee",
      img: "/images/Leeyunseung/dog.png",
    },
  ];
  return (
    <div>
      <Nav />
      <div className="main">
        <div className="feeds">
          <Article>
            {mainUser.map(({ username, img }, idx) => (
              <User key={`${username}-${idx}`} img={img} username={username} />
            ))}
          </Article>
        </div>
        <Aside />
      </div>
    </div>
  );
}

export default MainLee;
