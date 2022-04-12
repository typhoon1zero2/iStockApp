import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import DashBoard from "./pages/DashBoard";
import Home from "./pages/Home";
import Stock from "./pages/Stock";
import stocks from './data';


function App() {
    const [ stock, setStock ] = useState({}) 
    const data = stocks;
    const getStock = (e)=>{
        setStock(e)
    }
  return (
    <>
      <main className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stocks/:symbol" element={<Stock stock={stock} />} />
          <Route path="/stocks" element={<DashBoard stocks={data} getStock={getStock} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
