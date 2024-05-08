import React, { createContext, useState } from "react";

import na1 from "../assets/home-page/New_Arrivals/na-1.jpeg"
import na2 from "../assets/home-page/New_Arrivals/na-2.jpeg"
import na3 from "../assets/home-page/New_Arrivals/na-3.jpeg"
import na4 from "../assets/home-page/New_Arrivals/na-4.jpeg"
import na5 from "../assets/home-page/New_Arrivals/na-5.jpeg"
import na6 from "../assets/home-page/New_Arrivals/na-6.jpeg"
import na7 from "../assets/home-page/New_Arrivals/na-7.jpeg"
import na8 from "../assets/home-page/New_Arrivals/na-8.jpeg"



export const ArrivalsContext = createContext();
const NewArrivalsContext = (props) => {
  const [Arrivals, setArrivals] = useState([
    {
      img: na1 , 
      name: "Plain Shirt",
      brandName: "Adidas",
      price: "$78",
      rating: 4,
    },
    
    {
      img: na2,
      name: "Plain Texture Shirt",
      brandName: "Adidas",
      price: "$60",
      rating: 4,
    },

    {
      img: na3,
      name: "White Cotton Shirt",
      brandName: "Adidas",
      price: "$60",
      rating: 4,
    },

    {
      img: na4,
      name: " Half sleeves Printed Shirt",
      brandName: "Adidas",
      price: "$70",
      rating: 4,
    },

    {
      img:na5,
      name: "Simple Denim Shirt",
      brandName: "Adidas",
      price: "$68",
      rating: 4,
    },

    {
      img: na6,
      name: "Classic Short",
      brandName: "Adidas",
      price: "$45",
      rating: 4,
    },

    {
      img: na7,
      name: "Modern Double Pocket Shirt ",
      brandName: "Adidas",
      price: "$80",
      rating: 4,
    },

    {
      img: na8,
      name: "Half Sleeves Shirt",
      brandName: "Adidas",
      price: "$78",
      rating: 4,
    },
  ]);
  return (
    <ArrivalsContext.Provider value={{ Arrivals, setArrivals }}>
      {props.children}
    </ArrivalsContext.Provider>
  );
};

export default NewArrivalsContext;
