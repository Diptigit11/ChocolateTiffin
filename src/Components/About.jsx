import React from 'react';
import AboutCarousel from './AboutCarousel'; // Adjust path as needed

const About = () => (
  <div className=" min-h-screen flex flex-col items-center p-4">
    <div className="flex justify-center my-4">
      <AboutCarousel className="w-48 md:w-64 lg:w-72 transform transition-transform duration-500 hover:scale-110" />
    </div>
    <div className="text-center p-4 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold text-brown-700 mb-4 animate-fadeIn">Welcome to Chocolate Tiffin Cake Shop!</h1>
      <p className="text-lg md:text-xl text-brown-600 animate-fadeIn">
        We're a cozy bakery that loves making tasty treats. Our owner is a baking enthusiast who believes in the power of chocolate to make days better. Our cakes are soft, gooey, and filled with happiness. We use top-notch ingredients to ensure each bite is amazing. And we're not just about cakes but also our shop has pastry, donuts, and brownies that are pure bliss.
      </p>
      <p className="mt-4 text-lg md:text-xl text-brown-600 animate-fadeIn">
        We know life is busy, so we make things easy. Grab a treat to go or enjoy it here. Join us at Chocolate Tiffin Cake Shop for a delightful dessert experience that'll bring a smile to your face.
      </p>
      <p className="mt-4 text-lg md:text-xl font-bold text-brown-700 animate-fadeIn">
        The Chocolate Tiffin Cake Shop Team <span role="img" aria-label="smile">😊</span>
      </p>
    </div>
  </div>
);

export default About;
