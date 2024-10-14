// Overservice.js
import React from "react";
import Cart01 from "../component/Cart01";

// import { icons } from "react-icons";
const cardData =[
  {
    "id":1,
    "icon": "fa-solid fa-fan",
    "title": "Air Conditioning Service",
    "description": "Complete air conditioning service to keep your car's climate comfortable."
  },
  {
    "id":2,
    "icon": "fa-solid fa-broom",
    "title": "Car Cleaning",
    "description": "Professional interior and exterior car cleaning services."
  },
  {
    "id":3,
    "icon": "fa-solid fa-paint-roller",
    "title": "Car Painting",
    "description": "High-quality car painting services for a fresh new look."
  },
  {
    "id":4,
    "icon": "fa-brands fa-empire",
    "title": "Tire Services",
    "description": "Comprehensive tire services, including rotation and replacement."
  },
  {
    "id":5,
    "icon": "fa-solid fa-oil-can",
    "title": "Oil Change",
    "description": "Regular oil change service to keep your engine running smoothly."
  },
  {
    "id":6,
    "icon": "fa-solid fa-screwdriver-wrench",
    "title": "Car Repair",
    "description": "Expert car repair services for all makes and models."
  },
  {
    "id":7,
    "icon": "fa-solid fa-droplet",
    "title": "Exterior Wash",
    "description": "Thorough exterior washing to remove dirt and grime."
  },
  {
    "id":8,
    "icon": "fa-solid fa-shower",
    "title": "Full Car Wash",
    "description": "Complete car wash service, including interior and exterior cleaning."
  }
];


const Overservice = () => {
  return (
    <div className="p-overservice">
      <h1>Over Service</h1>

      <div className="cartservice">
        {cardData.map((item, id) => {
          return (
            <Cart01
            key={id}
              icons={item.icon}
              title={item.title}
              description={item.description}
            />
          );
        })}
       
      </div>
    </div>
  );
};

export default Overservice;
