import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function LoginLee() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [loginButton, setloginButton] = useState(false);

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    handleLoginBtn();
  };

  const handleLoginBtn = () => {
    inputValue.email.includes("@") && inputValue.password.length > 4
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
          name="email"
          onChange={handleLogin}
        />
        <input
          placeholder="비밀번호"
          type="password"
          name="password"
          onChange={handleLogin}
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
