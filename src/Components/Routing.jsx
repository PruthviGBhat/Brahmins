import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Book from "./Book";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Myorders from './Myorders';

const Routing = () => {
  const [orders,setorders]=useState([])

  const addtocart = (data) => {
    setorders([...orders,data])
  }
  const removeFromOrders = (id) => {
    setorders(prev => prev.filter(item => item.id !== id));
}
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dishes" element={<Navbar addtocart={addtocart} />} />
        <Route path="/Reservations" element={<Book />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/Orders' element={<Myorders orders={orders} removeFromOrders={removeFromOrders} />} />
      </Routes>
    </>
  )
}

export default Routing
