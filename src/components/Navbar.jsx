import { useState } from 'react';
import { Link } from "react-router";
import "../pages/homePage.css"

import store from "../assets/store.svg"
import cart from "../assets/cart.svg"

function Navbar() {

  return (
    <>
        <nav>
            <img className="nav-svg" src={store} alt="Store svg" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="Shop">Shop</Link></li>
                <li><Link to="Cart">Cart</Link></li>
            </ul>
            <img className="nav-svg" src={cart} alt="Store svg" />
        </nav>
    </>
  );
}

export default Navbar
