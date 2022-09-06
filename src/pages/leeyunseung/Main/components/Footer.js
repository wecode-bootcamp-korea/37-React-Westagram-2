import React from "react";

const Footer = () => {
  return (
    <div>
      {INFO_LIST.map((info, idx) => {
        return <span key={idx}>{info.content}</span>;
      })}
    </div>
  );
};

export default Footer;

const INFO_LIST = [
  { content: "instagram 정보 ·" },
  { content: " 지원 ·" },
  { content: " 홍보센터 ·" },
  { content: " 채용정보 ·" },
  { content: " 개인정보처리방침 ·" },
  { content: " 약관 ·" },
  { content: " 디렉터리 ·" },
  { content: " 프로필 ·" },
  { content: " 해시태그 ·" },
  { content: " 언어" },
];
