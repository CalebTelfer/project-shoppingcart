import { useState, useEffect } from 'react';
import './App.css';
import './utility.css';
import Navbar from './components/Navbar';
import Homepage from './pages/homePage';
import FooterContent from './components/FooterContent';
import { Outlet } from 'react-router';

function App() {

  const [items, setItems] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setItems(data))
    .catch((error) => console.log(error));
  }, []);

  const addToCart = (item, quantity) => {

    const index = cartData.findIndex(
      ([itemName]) => itemName == item
    );

    if (index == -1) { // item not in cart yet
      setCartData(prevItems => [...prevItems, [item, quantity]]);
      
    } else {
      setCartData( prevItems =>  //item in cart, just update quantity.

        prevItems.map((cartItem, i) => {
          if (i == index) {
            return [cartItem[0], cartItem[1] + quantity];
          }

          return cartItem;
        })
      )
    }

    setCartQuantity(cartQuantity + quantity);
    setCartPrice(cartPrice + (item.price * quantity));
  };


  return (
    <>
      <Navbar cartQuantity={cartQuantity} />
      <Outlet context={{items, cartData, addToCart, cartQuantity, cartPrice}}/>
      <FooterContent />
    </>
  );
}

export default App
