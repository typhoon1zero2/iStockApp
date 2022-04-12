import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <h1>iStocks</h1>
      </Link>
      <Link to="/stocks">
        <h3>Stocks</h3>
      </Link>
      <Link to="/about">
        <h3>About</h3>
      </Link>
     
    </div>
  );
}

export default Nav;
