import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function LoginNam() {
  const navigate = useNavigate(); // 이동

  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const handleLogin = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleDisabled = () => {
    return inputValue.email.indexOf("@") >= 0 && inputValue.password.length >= 5
      ? ""
      : "disabled";
  };

  const handleSigninBtn = (event) => {
    event.preventDefault();
    // fetch("http://10.58.0.33:3000/auth/signin", { // 응수님 서버
    fetch("https://westagram-signup.herokuapp.com/login", {
      // 테스트 서버
      method: "post",
      headers: { "content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        // email: inputValue.email,
        id: inputValue.email,
        password: inputValue.password,
      }),
    }) //요청
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        if (data.token) {
          navigate("/main-nam");
        } else {
          alert("정확한 비밀번호를 입력해 주세요!");
        }
      });
    //응답
  };

  const handleSignupBtn = (event) => {
    event.preventDefault();
    // fetch("http://10.58.0.33:3000/auth/signup", { // 응수님 서버
    fetch("http://westagram-signup.herokuapp.com/signup ", {
      // 테스트 서버
      method: "Post",
      headers: { "content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        // email: inputValue.email,
        id: inputValue.email,
        password: inputValue.password,
      }),
    }) //요청
      .then((response) => response.json())
      .then((data) => console.log(data));
    //응답
  };

  return (
    <body>
      <main className="containerWrapperLogin">
        <div className="loginBox">
          <div className="titleWrap">
            <h1 className="">Westagram</h1>
          </div>
          <form className="loginWrap">
            <input
              name="email"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className="idInput"
              onChange={handleLogin}
            />
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
              className="pwInput"
              onChange={handleLogin}
            />
            <button
              onClick={handleSignupBtn}
              type="submit"
              className="loginBtn"
            >
              회원가입
            </button>
            <button
              onClick={handleSigninBtn}
              type="submit"
              disabled={handleDisabled()}
              className="loginBtn"
            >
              로그인
            </button>
          </form>
          <div className="textWrap">
            비밀번호를 잊으셨나요 <i className="fa-solid fa-question" />
          </div>
        </div>
      </main>
    </body>
  );
}

export default LoginNam;
