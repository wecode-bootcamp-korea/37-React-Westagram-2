import React, { useState } from "react";
import "./Main.scss";
import Feeds from "./components/Feeds";
import Aside from "./components/Aside";
import Nav from "../../../components/Nav/Nav";

function MainNam() {
  const [commentInputValue, setCommentValue] = useState("");
  const [commentArray, setCommentArray] = useState([]);

  const clear = () => {
    setCommentValue("");
  };

  const saveComment = (event) => {
    // console.log(event.target.value);
    setCommentValue(event.target.value);
    // console.log(typeof setCommentValue);
  };

  const createArray = (event) => {
    event.preventDefault();
    setCommentArray((prevList) => [...prevList, commentInputValue]);
    // console.log(commentInputValue, commentArray);
    ViewComment();
    clear();
  };

  function ViewComment() {
    let commentList = commentArray.map((elements, index) => {
      return (
        <li key={index}>
          <div className="feedWrap">
            <span id="feedId">canon_mj</span>
            <span id="feed">{elements}</span>
            <span id="feedMore">더 보기</span>
          </div>
          <div className="feedIconWrap">
            <span className="trashIcon">
              <i className="fa-regular fa-trash-can" />
            </span>
            <span className="heartIcon">
              <i className="fa-regular fa-heart" />
            </span>
          </div>
        </li>
      );
    });

    return commentList;
  }

  return (
    <div className="containerWrapperMain">
      <Nav />

      <main className="main">
        <div className="mainWrap">
          <div className="feeds">
            <Feeds
              commentInputValue={commentInputValue}
              saveComment={saveComment}
              createArray={createArray}
              ViewComment={ViewComment}
            />
          </div>

          <Aside />
        </div>
      </main>
    </div>
  );
}

export default MainNam;
