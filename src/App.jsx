import { useState } from 'react'
import './App.css'
import './utility.css'
import Navbar from './components/Navbar';
import Homepage from './pages/homePage';
import FooterContent from './components/FooterContent';

function App() {

  return (
    <>
    <Navbar />
    <Homepage />
    <FooterContent />
    </>
  );
}

export default App
