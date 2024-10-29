import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
const Copyrightfooter = () => {
  return (
    <div className="copyright">
      © 2024 Car Wash Center. All Rights Reserved.
      <br />
      <div className="ssm">
      <FaWhatsapp />
      <FaInstagram />
      <FaTwitter />
      <FaFacebook />
      <FaYoutube />
      </div>
    </div>
  );
};

export default Copyrightfooter;
