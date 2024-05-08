import React from 'react'
import Header from './Header'
import Newsletter from '../Sections/Newsletter'
import Footer from './Footer'

const Card = () => {
  const headerData = [
    {
      heading: "#StayCool",
      desc: "Save more with coupons & up to 70% off!",
      // img: "",
    },
  ];
  return (
    <>
        <Header HData={headerData}/>
        <h1>shopping cards will be created soon ... </h1>
        <Newsletter />
        <Footer/>
    </>
  )
}

export default Card