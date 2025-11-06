import { useState } from 'react'
import './App.css'
import './utility.css'
import Navbar from './components/Navbar';
import Homepage from './pages/homePage';

function App() {

  return (
    <>
    <Navbar />
    <Homepage />
    </>
  );
}

export default App
