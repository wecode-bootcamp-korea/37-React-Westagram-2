import React, { useState } from "react";
import "../Login/Login.scss";
import { useNavigate } from "react-router-dom";

const LoginJoo = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [disabled, setDisabled] = useState(true);
  const saveUserId = (event) => {
    setUserId(event.target.value);
  };
  const saveUserPw = (event) => {
    setUserPw(event.target.value);
  };
  const handleDisabled = () => {
    if (userId.includes("@") && userPw.length > 0) {
      setDisabled(false);
    }
  };

  return (
    <div className="login">
      <div className="box-all">
        <h1 className="text-title">Westagram</h1>
        <form className="form-login">
          <input
            onChange={saveUserId}
            onKeyUp={handleDisabled}
            value={userId}
            id="input-id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={saveUserPw}
            onKeyUp={handleDisabled}
            value={userPw}
            id="input-pw"
            type="password"
            placeholder="비밀번호"
          />
          {disabled === true ? (
            <button
              disabled={disabled}
              onClick={() => {
                navigate("/main-joo");
              }}
              id="btn-login"
              type="submit"
            >
              로그인
            </button>
          ) : (
            <button
              style={{ backgroundColor: "rgb(0, 149, 246, 1)" }}
              className="btn-hoverEffect"
              disabled={disabled}
              onClick={() => {
                navigate("/main-joo");
              }}
              id="btn-login"
              type="submit"
            >
              로그인
            </button>
          )}
          {/* <button
            disabled={disabled}
            onClick={() => {
              navigate("/main-joo");
            }}
            id="btn-login"
            type="submit"
          >
            로그인
          </button> */}
        </form>
        <p className="message-emailError">*이메일 형식을 다시 확인해주세요.</p>
        <p className="message-pwError">
          *비밀번호가 5글자 이상인지 확인해주세요.
        </p>
        <p className="message-forgetPw">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default LoginJoo;
