import React from "react";
import {Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import DashBoard from "./pages/DashBoard";
import Home from "./pages/Home";
import Stock from "./pages/Stock";

function App() {
  return (
    <>
      <main className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stocks/:symbol" element={<Stock />} />
          <Route path="/stocks" element={<DashBoard />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
