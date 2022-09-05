import React from "react";
import Nav from "./Nav";
import Story from "./Story";
import Feed from "./Feed";
import Profile from "./Profile";
import Recommend from "./Recommend";
import Footer from "./Footer";
import "../Main/Main.scss";

const MainJoo = () => {
  return (
    <div className="main">
      <Nav />
      <main>
        <div>
          <Story />
          <div>
            <Feed />
          </div>
        </div>
        <div className="box-aside">
          <Profile />
          <Recommend />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default MainJoo;
