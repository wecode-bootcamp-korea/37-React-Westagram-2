import React, { useState, useEffect } from "react";
import Feeds from "./components/Feeds";
import Aside from "./components/Aside";
import Nav from "../../../components/Nav/Nav";
import "./Main.scss";

function MainNam() {
  const [feedDataList, setFeedDataList] = useState([]);

  useEffect(() => {
    fetch("/data/feedData.json")
      .then((response) => response.json())
      .then((result) => setFeedDataList(result));
  }, []);

  return (
    <>
      <Nav />
      <div className="containerWrapperMain">
        <main className="main">
          <div className="mainWrap">
            <div className="feedsWrap">
              {feedDataList.map((el, index) => {
                return <Feeds key={index} feed={el} />;
              })}
            </div>
            <Aside />
          </div>
        </main>
      </div>
    </>
  );
}

export default MainNam;
