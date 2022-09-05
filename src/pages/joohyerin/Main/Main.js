import React from "react";
import Nav from "./components/Nav";
import Story from "./components/Story";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Recommend from "./components/Recommend";
import Footer from "./components/Footer";
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
