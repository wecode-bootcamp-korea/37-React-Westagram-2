import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function LoginLee() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleClickBtnSignIn = (e) => {
    // ToDo why??
    e.preventDefault();

    fetch("http://10.58.5.155:3000/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: inputValue.email,
        password: inputValue.password,
      }),
    })
      .then((response) => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error("에러 발생!");
      })
      // .catch((error) => console.log(error))
      .then((data) => {
        localStorage.setItem("TOKEN", data.accessToken);

        navigate("../Main-lee");
      });
  };

  const handleClickBtnSignUp = (e) => {
    e.preventDefault();
    fetch("http://10.58.5.155:3000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: inputValue.email,
        password: inputValue.password,
      }),
    }).then((response) => {
      if (response.ok === true) {
        return response.json();
      }
      throw new Error("에러 발생!");
    });
    // .catch((error) => console.log(error));
  };

  return (
    <div className="login-wrapper">
      <div className="tttt">
        <div className="not-forgat-password">
          <h1>Westargram</h1>
          <input
            placeholder="전화번호, 사용자 이름 또는 이메일"
            name="email"
            onChange={handleChangeInput}
          />
          <input
            placeholder="비밀번호"
            type="password"
            name="password"
            onChange={handleChangeInput}
          />
          <button
            type="button"
            className={
              inputValue.email.includes("@") && inputValue.password.length > 4
                ? "on-button"
                : "off-button"
            }
            onClick={handleClickBtnSignUp}
          >
            회원가입
          </button>
          <button
            type="button"
            className={
              inputValue.email.includes("@") && inputValue.password.length > 4
                ? "on-button"
                : "off-button"
            }
            onClick={handleClickBtnSignIn}
          >
            로그인
          </button>
        </div>
        <div className="forgat-password">
          <a href="www.naver.com">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginLee;
