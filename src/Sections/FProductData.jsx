import React, { useContext } from "react";
import { FProductContext } from "../Context/FeaturedProductContext";

const FProductData = () => {
  const { FProducts } = useContext(FProductContext);
  return (
    <>
      {FProducts.map((info, i) => {
        return (
          <a key={i} href="02-2-shop-product.html">
            <div className="rounded-2xl border border-[#CCE7D0] my-[15px] py-[10px] px-[12px] fp">
              <img
                src={info.img}
                alt=""
                width="283px"
                className="rounded-2xl"
              />
              <div className="relative font-bold mt-2">
                <p className="">{info.name}</p>
                <h3 className="pt-[7px] font-extrabold">{info.brandName}</h3>
                <div className="">{info.rating}</div>
                <p className="pt-[7px] text-[#088178] font-bold">
                  {info.price}
                </p>
                <div className="bg-[#e3e6f3] rounded-full absolute p-2 right-0 bottom-0 flex items-center">
                  gag
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
};

export default FProductData;
