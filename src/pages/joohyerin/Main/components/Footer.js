import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <Link to="#">소개 ·</Link>
        <Link to="#">도움말 ·</Link>
        <Link to="#">홍보센터 ·</Link>
        <Link to="#">API ·</Link>
        <Link to="#">채용 정보 ·</Link>
        <Link to="#">개인정보처리방침 ·</Link>
        <Link to="#">약관 ·</Link>
        <Link to="#">위치 ·</Link>
        <Link to="#">언어</Link>
      </div>
      <p>©2022 WESTAGRAM FROM HYERIN</p>
    </div>
  );
};

export default Footer;
