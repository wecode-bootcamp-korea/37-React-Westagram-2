import React from "react";
import "./Main.scss";
import Feeds from "./components/Feeds";
import Aside from "./components/Aside";
import Nav from "../../../components/Nav/Nav";

function MainNam() {
  return (
    <div className="containerWrapperMain">
      <Nav />
      <main className="main">
        <div className="mainWrap">
          <div className="feedsWrap">
            <Feeds />
          </div>
          <Aside />
        </div>
      </main>
    </div>
  );
}

export default MainNam;
