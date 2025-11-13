import { useState, useEffect } from 'react';
import './App.css';
import './utility.css';
import Navbar from './components/Navbar';
import Homepage from './pages/homePage';
import FooterContent from './components/FooterContent';
import { Outlet } from 'react-router';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setItems(data))
    .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <Outlet context={{items}}/>
      <FooterContent />
    </>
  );
}

export default App
