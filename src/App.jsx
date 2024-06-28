import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './Components/Loader';
import CakeDetails from './Components/CakeGallery/CakeDetails';
import CakeImage from './Components/CakeGallery/CakeImage';
import CakeCategory from './Components/CakeGallery/CakeCategory';
import { CakeImageData, Animal_theme_cakes , Barbie_Cakes } from './Components/CakeGallery/CakeImagesData'; // Adjust import as needed
import About from './Components/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CircleAnimation from './Components/CircleAnimation';
import CardFlip from './Components/CardFlip';
import Wp from './Components/Wp';
import MapEmbed from './Components/MapEmbed';
import Features from './Components/Features';
import { AuroraHero } from './Components/AuroraHero';
import Cart from './Components/CartFunctional/Cart';
import Login from './Screens/Login';
import SignIn from './Screens/SignIn';
import ContextProvider from './Components/Features/ContextProvider';

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
    <ContextProvider>
      <div className="min-h-screen mt-20">
        <Router>
          <div className="min-h-screen">
            <Wp />
            <Navbar />
            <Routes>
              <Route exact path="/" element={<><AuroraHero /> <CakeImage /><About /><CardFlip /><MapEmbed /><Features /></>} />
              <Route path="/animal-theme-cakes" element={<CakeCategory cakes={Animal_theme_cakes} title="Animal Theme Cakes" />} />
             <Route path="/barbie-cakes" element={<CakeCategory cakes={Barbie_Cakes} title="Barbie Theme Cakes" />} />
              <Route path="/cake-details/:id" element={<CakeDetails />} />
              <Route exact path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<SignIn />} />
              {/* Other routes */}
            </Routes>
            {/* <Footer /> */}
          </div>
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
