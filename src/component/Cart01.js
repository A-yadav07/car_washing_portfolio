import React from "react";
// import { icons } from "react-icons";

const Cart01 = ({ icons ,title , description }) => {
  return (
    <div className="cart01">
      <div className="cart01img">
      <i className={icons}></i>
              <h3>{title}</h3>
        <p>{description}</p>
      </div>
     
    </div>
  );
};

export default Cart01;
