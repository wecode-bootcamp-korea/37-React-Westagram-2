import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function LoginNam() {
  const navigate = useNavigate(); // 이동

  const [idInputValue, setIdValue] = useState("");
  const [pwInputValue, setPwValue] = useState("");

  const saveUserId = (event) => {
    setIdValue(event.target.value);
  };

  const saveUserPw = (event) => {
    setPwValue(event.target.value);
  };

  const disabledHandle = () => {
    return idInputValue.indexOf("@") >= 0 && pwInputValue.length >= 5
      ? ""
      : "disabled";
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
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className="idInput"
              value={idInputValue}
              onChange={saveUserId}
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="pwInput"
              value={pwInputValue}
              onChange={saveUserPw}
            />
            <button
              onClick={() => {
                navigate("/main-nam");
              }}
              type="submit"
              disabled={disabledHandle()}
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
