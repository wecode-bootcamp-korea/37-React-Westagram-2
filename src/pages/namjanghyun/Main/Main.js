import React, { useState, useEffect } from "react";
import "./Main.scss";
import Feeds from "./components/Feeds";
import Aside from "./components/Aside";
import Nav from "../../../components/Nav/Nav";

function MainNam() {
  const [feedDataList, setFeedDataList] = useState([]);

  useEffect(() => {
    fetch("./data/feedData.json")
      .then((response) => response.json())
      .then((result) => setFeedDataList(result));
  }, []);

  return (
    <div className="containerWrapperMain">
      <Nav />
      <main className="main">
        <div className="mainWrap">
          <div className="feedsWrap">
            {feedDataList.map((el, index) => {
              // console.log(el);
              //const { id, userId, text, src, profile } = feed;
              const feed = feedDataList[index];
              // console.log(feed.id);
              return <Feeds key={index} feed={feed} />;
            })}
          </div>
          <Aside />
        </div>
      </main>
    </div>
  );
}

export default MainNam;
