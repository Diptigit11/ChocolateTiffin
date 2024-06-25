import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

import image5 from '/out2.jpeg';
import image1 from '/in.jpeg';
import image2 from '/in2.jpeg';
import image3 from '/in3.jpeg';
import image4 from '/out.jpeg';
import image6 from '/out4.jpeg';

const imageUrls = [image5, image6, image1, image2, image3, image4];

const AboutCarousel = ({ className }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? imageUrls.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === imageUrls.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setInterval(next, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    
    <div className={`overflow-hidden relative ${className}`} style={{ width: '65%', height: '65%' }}>
      <h1 className="text-3xl md:text-4xl font-bold flex item-center justify-center text-brown-700 mb-4 animate-fadeIn">About Us</h1>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={15} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow text-gray-800 hover:bg-white"
        >
          <ChevronRight size={15} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {imageUrls.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-2 h-2 bg-gray-800 rounded-full
                ${curr === i ? "p-2 bg-gray-800" : "bg-gray-400"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCarousel;
