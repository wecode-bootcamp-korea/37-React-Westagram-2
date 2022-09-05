import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function LoginLee() {
  const navigate = useNavigate();
  const [userId, SetUserId] = useState("");
  const [userPassWord, setUserPassWord] = useState("");
  const [loginButton, setloginButton] = useState(false);

  const onChangeId = (event) => {
    SetUserId(event.target.value);

    userId.includes("@") && userPassWord.length > 4
      ? setloginButton(true)
      : setloginButton(false);
  };

  const onChangePassWord = (event) => {
    setUserPassWord(event.target.value);

    userId.includes("@") && userPassWord.length > 4
      ? setloginButton(true)
      : setloginButton(false);
  };

  return (
    <div className="login-wrapper">
      <div>
        <h1>Westargram</h1>
        <input
          placeholder="전화번호, 사용자 이름 또는 이메일"
          type="text"
          value={userId}
          onChange={onChangeId}
        />
        <input
          placeholder="비밀번호"
          type="password"
          value={userPassWord}
          onChange={onChangePassWord}
        />
        <button
          type="button"
          className={loginButton ? "on-button" : "off-button"}
          onClick={() => {
            return loginButton ? navigate("../Main-lee") : null;
          }}
        >
          로그인
        </button>
        <a href="www.naver.com">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default LoginLee;
