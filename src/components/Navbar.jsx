import { useState } from 'react';
import { Link } from "react-router";
import "../pages/homePage.css"
import { useOutletContext } from "react-router";

function Navbar({cartQuantity}) {

  return (
    <>
        <nav>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Shop">Shop</Link></li>
                <li><Link to="/Cart">Cart ( {cartQuantity} )</Link></li>
            </ul>

        </nav>
    </>
  );
}

export default Navbar
