import React from "react";
import { FaArchive, FaArrowAltCircleDown, FaArrowCircleDown, FaArrowDown, FaBan, FaBeer, FaCarCrash, FaHamburger, FaHome, FaPage4, FaPhone, FaToolbox } from "react-icons/fa";
import img from "../asete/carwash.jpeg";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav">
        <img src={img} className="img1"/>
      </div>
      <div className="Manu">
        <p><FaHome/> Home</p>
        <p><FaArchive/> About Us</p>
        <p><FaToolbox/> Srvice</p>
        <p><FaPhone/> Contact Us</p>
        <p><FaPage4/>Pages</p>
      </div>
      <div className="button">
        <button><FaCarCrash/> Get An Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
