import React from "react";
import Story from "./Story";
import Recommend from "./Recommend";
import { WESTA_INFO_LIST_LI } from "./uiData";

function Aside() {
  const westaInfoList = WESTA_INFO_LIST_LI.map((infoList) => {
    return <li key={infoList.id}>{infoList.menuName}</li>;
  });

  return (
    <aside className="main-right">
      <div className="userInfo">
        <img src="/images/namjanghyun/profile_img.png" alt="userImg" />
        <div className="userInfoText">
          <span>wecode_bootcamp</span>
          <span>남장현 | 위코드</span>
        </div>
      </div>

      <Story />

      <Recommend />

      <div className="westaInfo">
        <ul>{westaInfoList}</ul>
        <span>© 2022 Westagram</span>
      </div>
    </aside>
  );
}

export default Aside;
