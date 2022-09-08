import React, { useState } from "react";
import "../Login/Login.scss";
import { useNavigate } from "react-router-dom";

const LoginJoo = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const saveUserId = (event) => {
    setUserId(event.target.value);
  };
  const saveUserPw = (event) => {
    setUserPw(event.target.value);
  };
  const handleDisabled = () => {
    let validation = userId.includes("@") && userPw.length > 4;
    return validation ? setDisabled(false) : setDisabled(true);
  };

  const clickLogin = (e) => {
    e.preventDefault();
    fetch("http://10.58.3.201:3000/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then((response) => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error("에러 발생!");
      })
      .catch((error) => {
        alert(error);
      })
      .then((data) => {
        if (data.message === "login success") {
          localStorage.setItem("TOKEN", data.accessToken);
          alert("로그인 성공");
          navigate("/main-joo");
        } else {
          alert("로그인 실패");
        }
      });
  };

  return (
    <div className="login">
      <div className="login-box">
        <h1 className="login-title">Westagram</h1>
        <form className="form-login">
          <input
            value={userId}
            className="login-id"
            onChange={saveUserId}
            onKeyUp={handleDisabled}
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            value={userPw}
            className="login-pw"
            onChange={saveUserPw}
            onKeyUp={handleDisabled}
            type="password"
            placeholder="비밀번호"
          />
          <button
            style={
              disabled === true
                ? { backgroundColor: "rgb(0, 149, 246, 0.3)" }
                : { backgroundColor: "rgb(0, 149, 246, 1)" }
            }
            className="login-btn"
            disabled={disabled}
            onClick={clickLogin}
          >
            로그인
          </button>
        </form>
        <p className="login-findPw">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default LoginJoo;
