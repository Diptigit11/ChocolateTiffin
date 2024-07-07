// src/AppRoutes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CakeDetails from './Components/CakeGallery/CakeDetails';
import CakeImage from './Components/CakeGallery/CakeImage';
import CakeCategory from './Components/CakeGallery/CakeCategory';
import About from './Components/About';
import Cart from './Components/CartFunctional/Cart';
import CardFlip from './Components/CardFlip';
import MapEmbed from './Components/MapEmbed';
import Features from './Components/Features';
import Login from './Screens/Login';
import SignIn from './Screens/SignIn';
import { AuroraHero } from './Components/AuroraHero';
import CakeSummary from './Components/CakeGallery/CakeSummary';
import CakeCategorys from './Components/CakeGallery/CakeCategorys';
import SearchPage from './Components/SearchBars/SearchPage';
import CircleAnimation from './Components/CircleAnimation'
import { 
  Animal_theme_cakes, 
  Barbie_Cakes, 
  CakesForHer, 
  BikeCakes, 
  CricketCakes, 
  FrozenThemeCakes , 
  GymCakes ,
  PinataCakes ,
  WeddingCakes ,
  AnniversaryCakes,
  BossBaby ,
  CakesForHim ,
  FootballCakes,
  HalfYear,
  Peppa_Pig_Cakes, 
  TravelCakes,
  Baby_Shower_Cakes, 
  ButterFly_Cakes,
  Bachelorette_cakes,
  farewell_cakes,
  make_up_cakes,
  spider_man_cakes,
  unicorn_cakes , 
  Pastry,
  celebration_cakes,
  cheesecakes,
  donuts,
  brownie,
  cupcakes,


} from './Components/CakeGallery/CakeImagesData';
import Carousel from './Components/Carousel';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<> <CircleAnimation /> <AuroraHero />  <Carousel /> < CakeSummary /> <CakeImage /> {<CakeCategorys cakes={Animal_theme_cakes} title="Animal Theme Cakes" />} <CakeCategorys cakes={ PinataCakes} title="Pinata Cakes" /> <CakeCategorys cakes={unicorn_cakes} title="Unicorn Cakes" /> <CakeCategorys cakes={ButterFly_Cakes} title="Butterfly Cakes" /> <CakeCategorys cakes={WeddingCakes} title="Wedding Cakes" /><About /><CardFlip /><MapEmbed /><Features /></>} />
      <Route path="/carousel" element={<Carousel />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/cake-details/:id" element={<CakeDetails />} />
      <Route exact path="/CakeImage" element={<CakeImage />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/MapEmbed" element={<MapEmbed />} />
      
      <Route path="/animal-theme-cakes" element={<CakeCategory cakes={Animal_theme_cakes} title="Animal Theme Cakes" />} />
      <Route path="/barbie-cakes" element={<CakeCategory cakes={Barbie_Cakes} title="Barbie Theme Cakes" />} />
      <Route path="/cakes-for-her" element={<CakeCategory cakes={CakesForHer} title="Cakes For Her" />} />
      <Route path="/cakes-for-him" element={<CakeCategory cakes={CakesForHim} title="Cakes For Him" />} />
      <Route path="/bike-cakes" element={<CakeCategory cakes={BikeCakes} title="Bike Themed Cake" />} />
      <Route path="/cricket-cakes" element={<CakeCategory cakes={CricketCakes} title="Cricket Theme Cakes" />} />
      <Route path="/frozen-theme-cakes" element={<CakeCategory cakes={FrozenThemeCakes} title="Frozen Theme Cakes" />} />
     <Route path="/pinata-cakes" element={<CakeCategory cakes={ PinataCakes} title="Pinata Cakes" />} />
      <Route path="/gym-cakes" element={<CakeCategory cakes={GymCakes} title="Gym Theme Cakes" />} />
     <Route path="/wedding-cakes" element={<CakeCategory cakes={WeddingCakes} title="Wedding Cakes" />} />
      <Route path="/anniversary-cakes" element={<CakeCategory cakes={AnniversaryCakes} title="Anniversary Cakes" />} />
      <Route path="/boss-baby" element={<CakeCategory cakes={BossBaby} title="Boss Baby Cakes" />} />
     
     
      <Route path="/cakes-for-him" element={<CakeCategory cakes={CakesForHim} title="Baby Shark Cakes" />} />
      <Route path="/football-cakes" element={<CakeCategory cakes={FootballCakes} title="Cakes For Her" />} />
      <Route path="/half-year" element={<CakeCategory cakes={HalfYear} title="Half Year Cake" />} />
      <Route path="/peppa-pig-cakes" element={<CakeCategory cakes={Peppa_Pig_Cakes} title="Peppa Pig Cakes" />} />
      <Route path="/travel-cakes" element={<CakeCategory cakes={TravelCakes} title="Travel Theme Cakes" />} />
     <Route path="/baby-shower-cakes" element={<CakeCategory cakes={Baby_Shower_Cakes} title="Baby Shower Cakes" />} />
      <Route path="/butterfly-cakes" element={<CakeCategory cakes={ButterFly_Cakes} title="Butterfly Cakes" />} />
     <Route path="/bachelorette-cakes" element={<CakeCategory cakes={Bachelorette_cakes} title="Bachelorette Theme Cakes" />} />
     <Route path="/farewell-cakes" element={<CakeCategory cakes={farewell_cakes} title="FareWell Cakes" />} />
      <Route path="/make-up-cakes" element={<CakeCategory cakes={make_up_cakes} title="Make Up Cakes" />} />
      <Route path="/spider-man-cakes" element={<CakeCategory cakes={spider_man_cakes} title="Spider Man Cakes" />} />
      <Route path="/unicorn-cakes" element={<CakeCategory cakes={unicorn_cakes} title="Unicorn Cakes" />} />
     
     {/* for navItems */}
     <Route path="/cupcakes" element={<CakeCategory cakes={cupcakes} title="Cupcakes" />} />
     <Route path="/donuts" element={<CakeCategory cakes={donuts} title="Donuts" />} />
     <Route path="/brownie" element={<CakeCategory cakes={brownie} title="Brownie" />} />
     <Route path="/cheesecakes" element={<CakeCategory cakes={cheesecakes} title="CheeseCakes" />} />
     <Route path="/Pastry" element={<CakeCategory cakes={Pastry} title="Pastry" />} />
     <Route path="/celebration-cakes" element={<CakeCategory cakes={celebration_cakes} title="Celebration Cakes" />} />
      


     <Route path="/cake-details/:id" element={<CakeDetails />} />
      <Route exact path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default AppRoutes;
