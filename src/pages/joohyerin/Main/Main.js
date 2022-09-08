import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
// import Nav from "../../../components/Nav/Nav";
import Story from "./components/Story";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Recommend from "./components/Recommend";
import Footer from "./components/Footer";
import "../Main/Main.scss";

const MainJoo = () => {
  const [feedInfoList, setFeedInfoList] = useState([]);
  useEffect(() => {
    fetch("/data/FeedData.json")
      .then((response) => response.json())
      .then((result) => setFeedInfoList(result));
  }, []);

  return (
    <div className="main">
      <Nav />
      <main>
        <div>
          <Story />
          <div>
            {feedInfoList.map((feedInfo) => (
              <Feed
                key={feedInfo.id}
                profileImage={feedInfo.profileImage}
                userId={feedInfo.userId}
                location={feedInfo.location}
                feedImage={feedInfo.feedImage}
              />
            ))}
          </div>
        </div>
        <div className="aside">
          <Profile />
          <Recommend />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default MainJoo;
