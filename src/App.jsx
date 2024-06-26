import React, { useState, useEffect } from 'react';
import Loader from './Components/Loader';
import Carousel from './Components/Carousel';
import Features from './Components/Features';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About'
import Navbar from './Components/Navbar';
import CakeImage from './Components/CakeGallery/CakeImage'
import Footer from './Components/Footer'
import CircleAnimation from './Components/CircleAnimation';
import CardFlip from './Components/CardFlip';
import Wp from './Components/Wp';
import './index.css'
import MapEmbed from './Components/MapEmbed';
import { AuroraHero } from './Components/AuroraHero';
import CakeDetails from './Components/CakeGallery/CakeDetails';
import Login from './Screens/Login';
import SignIn from './Screens/SignIn';
import {CartProvider} from './Components/CartFunctional/CartContext'
import Cart from './Components/CartFunctional/Cart'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust this time based on your requirements
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
    <CartProvider>
        <div className="min-h-screen mt-20"> 
        <Router>
      <div className="min-h-screen">
        <Wp />
        <Navbar />
        {/* <CircleAnimation /> */}
        <Routes>
          <Route exact path="/" element={<><AuroraHero/>  <CakeImage /><About /><CardFlip /><MapEmbed /><Features /></>} />
          <Route path="/cake-details/:id" element={<CakeDetails />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/cart" element={
          <Cart />
      } />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          {/* Other routes */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
      </div>
      </CartProvider>
    </>
  );
}

export default App;
