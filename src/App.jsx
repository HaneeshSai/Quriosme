import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import vector from "./assets/bg-waves/Vector.svg";
import vector1 from "./assets/bg-waves/Vector-1.svg";
import vector2 from "./assets/bg-waves/Vector-2.svg";
import vector3 from "./assets/bg-waves/Vector-3.svg";
import PopularServices from "./pages/PopularServices";
import Services from "./pages/Services";
import WhyUs from "./pages/WhyUs";
import About from "./pages/About";
import Queries from "./pages/Queries";

export default function App() {
  return (
    <div className="relative h-full">
      {/* Background images */}
      <img src={vector} className="absolute z-0 h-screen" alt="" />
      <img src={vector1} className="absolute z-0 h-screen" alt="" />
      <img
        src={vector2}
        className="absolute left-[700px] z-0 h-screen"
        alt=""
      />
      <img
        src={vector3}
        className="absolute left-[820px] z-0 h-screen"
        alt=""
      />

      {/* Content */}
      <div className="py-[20px] relative z-10">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/whyquriosme" element={<WhyUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/complexqueries" element={<Queries />} />
          <Route path="/popularservices" element={<PopularServices />} />
        </Routes>
      </div>
    </div>
  );
}
