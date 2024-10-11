import React from "react";
import Cart from "../component/Cart";
import image01 from '../asete/carrepair.jpg';
import image02 from '../asete/carair.jpg';
import image03 from '../asete/carcolor.jpg';
import image04 from '../asete/caroil.jpg';
import image05 from '../asete/carwash.jpg';
import image06 from '../asete/carcleling.jpg';

const Aboutus = () => {
  return (
    <div>
      <div className="first">
        <div className="container">
          <Cart image={image01} cartext={"Rpairing The Car"}/>
          <Cart image={image02} cartext={"Air In "}/>
          <Cart image={image03} cartext={"Coloring The Car "}/>
          <Cart image={image04} cartext={"Oil Repair"}/>
        </div>
      </div>
      <div className="second">
        <div className="aboutcart">
        <div className="down"><Cart image={image05} cartext={"Car Wash"}/></div>
        <div className="up"><Cart image={image06} cartext={"Modify The Car"}/></div>
        </div>
        <div className="textabout">
          <h3>About Us</h3>
          <p>
            A good Car Wash Attendant is punctual, reliable, and has a strong
            work ethic. They should be able to work well in a team and have
            excellent communication skills to interact with customers. Attention
            to detail, patience, and a commitment to maintaining high standards
            of cleanliness are important qualities.
          </p>
          <button>Discover Me</button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
