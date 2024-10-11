import React from "react";
import Cart from "../component/Cart";
import image1 from '../asete/carair.jpg';
import image2 from '../asete/carcleling.jpg';
import image3 from '../asete/carcolor.jpg';
import image4 from '../asete/carimage1.jpeg';
import image5 from '../asete/caroil.jpg';
import image6 from '../asete/carrepair.jpg';
import image7 from '../asete/car-wash1.jpg';
import image8 from '../asete/carwash.jpg';
import {FaCarBatteryattery} from "react-icons/fa";
import Cart01 from "../component/Cart01";
const Overservice = () => {
  return (
    <div className="p-overservice">
      <h1>      Over Service
      </h1>
      <div className="cartservice">
        <Cart01 image={image1}/>
        <Cart01 image={image2}/>
        <Cart01 image={image3}/>
        <Cart01 image={image4}/>
        <Cart01 image={image5}/>
        <Cart01 image={image6}/>
        <Cart01 image={image7}/>
        <Cart01 image={image8}/>
      </div>
    </div>
  );
};

export default Overservice;
