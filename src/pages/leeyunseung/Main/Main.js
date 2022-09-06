import React from "react";
import Nav from "../../../../src/components/Nav/Nav";
import User from "./components/User";
import Article from "../Main/components/Article";
import Aside from "../Main/components/Aside";
import "./Main.scss";

function MainLee() {
  return (
    <div>
      <Nav />
      <div className="main">
        <div className="feeds">
          <Article>
            <User img={img} username={username} />
          </Article>
        </div>
        <Aside />
      </div>
    </div>
  );
}

export default MainLee;

const { username, img } = {
  username: "yunseung_lee",
  img: "/images/Leeyunseung/dog.png",
};
