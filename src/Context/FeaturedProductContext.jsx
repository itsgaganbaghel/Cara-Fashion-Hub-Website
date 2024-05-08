import React, { createContext, useState } from "react";

import fp1 from "../assets/home-page/Featured_Product/fp-1.jpeg"
import fp2 from "../assets/home-page/Featured_Product/fp-2.jpeg"
import fp3 from "../assets/home-page/Featured_Product/fp-3.jpeg"
import fp4 from "../assets/home-page/Featured_Product/fp-4.jpeg"
import fp5 from "../assets/home-page/Featured_Product/fp-5.jpeg"
import fp6 from "../assets/home-page/Featured_Product/fp-6.jpeg"
import fp7 from "../assets/home-page/Featured_Product/fp-7.jpeg"
import fp8 from "../assets/home-page/Featured_Product/fp-8.jpeg"


export const FProductContext = createContext();
const FeaturedProductContext = (props) => {
  const [FProducts, setFProducts] = useState([
    {
      img: fp1,
      name: "nam44e",
      brandName: "Adidas",
      price: "$78",
      rating: 4,
    },
    {
      img: fp2,
      name: "name",
      brandName: "Adidas",
      price: "$8",
      rating: 4,
    },
    {
      img: fp3,
      name: "nam44e",
      brandName: "Adidas",
      price: "$78",
      rating: 4,
    },
    {
      img: fp4,
      name: "name",
      brandName: "Adidas",
      price: "$8",
      rating: 4,
    },
    {
      img: fp5,
      name: "nam44e",
      brandName: "Adidas",
      price: "$78",
      rating: 4,
    },
    {
      img: fp6,
      name: "name",
      brandName: "Adidas",
      price: "$8",
      rating: 4,
    },
    {
      img: fp7,
      name: "nam44e",
      brandName: "Adidas",
      price: "$78",
      rating: 4,
    },
    {
      img: fp8,
      name: "name",
      brandName: "Adidas",
      price: "$8",
      rating: 4,
    },
  ]);
  return (
    <FProductContext.Provider value={{ FProducts, setFProducts }}>
      {props.children}
    </FProductContext.Provider>
  );
};

export default FeaturedProductContext;
