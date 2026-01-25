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

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setItems(data))
    .catch((error) => console.log(error));
  }, []);

  const addToCart = (item, quantity) => {
    setCartData(prevItems => [...prevItems, [item, quantity]]);
    setCartQuantity(cartQuantity + quantity);
  };


  return (
    <>
      <Navbar cartQuantity={cartQuantity} />
      <Outlet context={{items, cartData, addToCart, cartQuantity}}/>
      <FooterContent />
    </>
  );
}

export default App
