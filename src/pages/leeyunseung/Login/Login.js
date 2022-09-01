import React, { useState } from "react";
import "./Login.scss";

function LoginLee() {
  let [userId, SetUserId] = useState("");
  let [userPassWord, setUserPassWord] = useState("");
  const onChangeId = (event) => {
    SetUserId(event.target.value);
  };

  const onChangePassWord = (event) => {
    setUserPassWord(event.target.value);
  };

  return (
    <div className="loginWrapper">
      <div>
        <h1>Westargram</h1>
        <input
          placeholder="전화번호, 사용자 이름 또는 이메일"
          type="text"
          disabled=""
          value={userId}
          onChange={onChangeId}
        />
        <input
          placeholder="비밀번호"
          type="password"
          disabled=""
          value={userPassWord}
          onChange={onChangePassWord}
        />
        <button type="button" disabled="">
          로그인
        </button>
        <a href="https://www.naver.com">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default LoginLee;
