import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logofooter">
        <h4>
          <i class="fa-solid fa-car"></i>MotoMart
        </h4>
        <i class="fa-solid fa-location-dot"></i> 4/37 Vibhav Khand Gomti Nagar
        <br />
        Lucknow, Uttar Pradesh, 226010
      </div>

      <div className="servicefooter">
        <p>Car Washing</p>
        <p>Car Reparing</p>
        <p>Car Modify</p>
        <p>Car Cleanig</p>
        <p>Car Oil Repaird</p>
        <p>Car Air</p>
      </div>

      <div className="contactme">
        Contact me!
        <br />
        <i class="fa-solid fa-phone"></i> +91 6392006343 <br />
        <i class="fa-solid fa-envelope"></i> anandyadav01782@gmail.com
        <br />
        <i class="fa-regular fa-calendar-days"></i> Monday - Sunday
      </div>
    </div>
  );
};

export default Footer;
