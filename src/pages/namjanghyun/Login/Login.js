import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function LoginNam() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const handleLogin = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // const handleDisabled = () => {
  //   return inputValue.email.indexOf("@") >= 0 && inputValue.password.length >= 5
  //     ? ""
  //     : "disabled";
  // };

  const isInputValid = !(
    inputValue.email.indexOf("@") >= 0 && inputValue.password.length >= 5
  );

  const handleSignin = (event) => {
    event.preventDefault();
    // fetch("http://10.58.0.33:3000/auth/signin", {
    fetch("http://westagram-signup.herokuapp.com/login", {
      method: "post",
      headers: { "content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        // email: inputValue.email,
        id: inputValue.email,
        password: inputValue.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/main-nam");
        } else {
          alert("정확한 비밀번호를 입력해 주세요!");
        }
      });
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // fetch("http://10.58.0.33:3000/auth/signup", {
    fetch("http://westagram-signup.herokuapp.com/signup ", {
      method: "Post",
      headers: { "content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        // email: inputValue.email,
        id: inputValue.email,
        password: inputValue.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {});
  };

  return (
    <main className="containerWrapperLogin">
      <div className="loginBox">
        <div className="titleWrap">
          <h1 className="">Westagram</h1>
        </div>
        <form className="loginWrap">
          <input
            name="email"
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
          <button onClick={handleSignup} type="submit" className="loginBtn">
            회원가입
          </button>
          <button
            onClick={handleSignin}
            type="submit"
            disabled={isInputValid}
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
  );
}

export default LoginNam;
