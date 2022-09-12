import React, { useState } from "react";
import Nav from "../../../../src/components/Nav/Nav";
import Article from "../Main/components/Article";
import Aside from "../Main/components/Aside";
import "./Main.scss";

function MainLee() {
  const [articeList, setArticleList] = useState([
    {
      articleNum: 0,
      mainImg:
        "https://velog.velcdn.com/images/hoje15v/post/5293c5f5-9ffa-4625-9a5e-13ba39972c47/Project%20with%20BackEnd%20(1).png",
      userList: [
        {
          id: 1,
          username: "yunseung_lee",
          img: "/images/Leeyunseung/dog.png",
        },
        {
          id: 2,
          username: "nanghyun_nam",
          img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MDJfMTEg%2FMDAxNjU5Mzk5ODc1MTQ3.UY5cOYvg0Lz6PMzoMzwKOiqH56Xh069HxsNPy_i3u9Qg.M-33KjGoxDi2oT4lSVeirqL_jgu4KCDbjk4KZMtNtiYg.PNG.kbrs1219%2Fimage.png&type=sc960_832",
        },
        {
          id: 3,
          username: "hyerin_joo",
          img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220131_229%2F1643571094523aHDvv_JPEG%2F44706990252007561_1303432131.jpg&type=sc960_832",
        },
        {
          id: 4,
          username: "youngtae_park",
          img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjFfMjgx%2FMDAxNjYxMDkyNjk2NjY1.9GyS5mqM2kVcjl_Nrqctiui4MVqF12mZAtL3V5rIXL8g.Ffgpbq_GF6KtecE-Fl8qBcU3_-efrNFLb6TW6XEmkw4g.JPEG.sinae1096%2FIMG_5803.jpg&type=sc960_832",
        },
      ],
      commentList: [],
    },
    {
      articleNum: 1,
      mainImg:
        "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fthumb2.gettyimageskorea.com%2Fimage_preview%2F700%2F202206%2FEYM%2F1402817377.jpg&type=sc960_832",
      userList: [
        {
          id: 1,
          username: "yunseung_lee",
          img: "/images/Leeyunseung/dog.png",
        },
      ],
      commentList: [],
    },
    {
      articleNum: 2,
      mainImg:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA2MDVfMjY2%2FMDAxNDk2NTkwMTc4NDgw.vuC7qI_QViXc0rkfgZ14Iyp1Ugcdy17Eo2OgQOMaQJwg.zycqtJuJ91brqWk7b61DjrJmkJKgEnr2E_DErBzl-YMg.PNG.500sty%2FUJVQYZa0sl.png&type=sc960_832",
      userList: [
        {
          id: 1,
          username: "yunseung_lee",
          img: "/images/Leeyunseung/dog.png",
        },
        {
          id: 2,
          username: "nanghyun_nam",
          img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MDJfMTEg%2FMDAxNjU5Mzk5ODc1MTQ3.UY5cOYvg0Lz6PMzoMzwKOiqH56Xh069HxsNPy_i3u9Qg.M-33KjGoxDi2oT4lSVeirqL_jgu4KCDbjk4KZMtNtiYg.PNG.kbrs1219%2Fimage.png&type=sc960_832",
        },
        {
          id: 3,
          username: "hyerin_joo",
          img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220131_229%2F1643571094523aHDvv_JPEG%2F44706990252007561_1303432131.jpg&type=sc960_832",
        },
      ],
      commentList: [],
    },
    {
      articleNum: 3,
      mainImg:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140617_270%2Fghdrl7979_14029673637274KYET_JPEG%2F113468212826a1624cl.jpg&type=sc960_832",
      userList: [
        {
          id: 1,
          username: "yunseung_lee",
          img: "/images/Leeyunseung/dog.png",
        },
      ],
      commentList: [],
    },
  ]);

  const addCommentByArticleNum = (articleId, comment) => {
    // const prev = articeList;

    // prev[articleId].commentList.push(comment);

    setArticleList((articleList) => {
      articleList[articleId].commentList.push(comment);
      return articeList;
    });
  };

  // useEffect(() => {
  // fetch("/data/recommendData2.json", {
  //   method: "GET",
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setArticleList(data);
  //   });
  // }, []);

  return (
    <>
      <Nav />
      <div className="main">
        <div className="feeds">
          {articeList.map(({ articleNum, mainImg, userList, commentList }) => (
            <Article
              key={articleNum}
              articleNum={articleNum}
              mainImg={mainImg}
              userList={userList}
              commentList={commentList}
              addCommentByArticleNum={addCommentByArticleNum}
            />
          ))}
        </div>
        <Aside />
      </div>
    </>
  );
}

export default MainLee;
