import React, { useState } from "react";
import { FaArchive,  FaCarCrash, FaHome, FaPage4, FaPhone, FaToolbox } from "react-icons/fa";
import img from "../asete/view-3d-car-model.jpg";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <div className="Navbar">
      <div className="nav">
        <img src={img} className="img1" />
      </div>
      <div className="Manu">
        <p><FaHome/> Home</p>
        <p><FaArchive/> About Us</p>
        <p><FaToolbox/> Srvice</p>
        <p><FaPhone/> Contact Us</p>
        <p><FaPage4/>Pages</p>
      </div>
      <div className="button1">
        <button><FaCarCrash/> Get An Appointment</button>
      </div>
      <div className="burgericon" onClick={toggleMenu}>
        <i class="fa-solid fa-burger"></i>
      </div>   
       </div>
  );
};

export default Navbar;