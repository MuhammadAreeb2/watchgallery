import React from "react"
import Home from "./components/home"
import About from "./components/about"
import { Routes, Route } from "react-router-dom";
import Images from "./components/gallery"
import FormikForm from "./components/contact"
import Service from "./components/service"


export default function App() {
  return (
    <>
      <Routes>

      <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Images />} />
        <Route path="/Contact" element={<FormikForm />} />
        
        <Route path="/Service" element={<Service />} />
      </Routes>









    </>
  )
}