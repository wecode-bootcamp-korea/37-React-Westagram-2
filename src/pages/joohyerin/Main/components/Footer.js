import React from "react";
import { FOOTER_INFO } from "./FooterData";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-info-list">
        {FOOTER_INFO.map((info) => {
          return (
            <li className="footer-info" key={info.id}>
              {info.title} ·
            </li>
          );
        })}
      </ul>
      <p>©2022 WESTAGRAM FROM HYERIN</p>
    </div>
  );
};

export default Footer;
