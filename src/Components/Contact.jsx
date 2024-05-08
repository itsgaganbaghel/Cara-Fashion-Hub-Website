import React from 'react'
import Newsletter from '../Sections/Newsletter'
import Header from './Header'
import Footer from './Footer'
import contact from "../assets/About/about-banner.png"

const Contact = () => {
  const headerData = [
    {
      heading: "#StayCool",
      desc: "Save more with coupons & up to 70% off!",
      img: contact,
    },
  ];
  return (
    <>
        <Header HData={headerData}/>
        <h1>Form will be created soon... </h1>
        <Newsletter/>
        <Footer />
    </>
  )
}

export default Contact