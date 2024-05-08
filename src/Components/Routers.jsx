import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import Shop from './Shop'
import About from './About'
import Contact from './Contact'
import Card from './Card'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Card' element={<Card />} />
    </Routes>
  )
}

export default Routers