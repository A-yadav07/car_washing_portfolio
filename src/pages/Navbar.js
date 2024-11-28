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
        <p> Home</p>
        <p> About Us</p>
        <p> Srvice</p>
        <p> Contact Us</p>
        <p>Pages</p>
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