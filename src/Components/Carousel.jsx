import { useState, useEffect } from "react";
import image1 from '/img/car1.png';
import image2 from '/img/car2.png';
import image3 from '/img/car3.png';
import image4 from '/img/car4.png';
import image5 from '/img/car5.png';
import image6 from '/img/car6.png';
import image7 from '/img/car7.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Cards array
  const cards = [
    { url: image1, id: 1 },
    { url: image2, id: 2 },
    { url: image3, id: 3 },
    { url: image4, id: 4 },
    { url: image5, id: 5 },
    { url: image6, id: 6 },
    { url: image7, id: 7 },
  ];

  const totalCards = cards.length;
  const loopedCards = [...cards, ...cards, ...cards];

  useEffect(() => {
    // Function to update items per view based on screen size
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3);
      } else {
        setItemsPerView(1);
      }
    };

    // Call update on mount and on window resize
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  useEffect(() => {
    // Function to move to the next image
    const interval = setInterval(() => {
      moveToNextSlide();
    }, 2000); // Change image every 3 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  const moveToNextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <>
     <div id="carousel" className="relative overflow-hidden p-4"> {/* Add id here */}
      <h2 className="text-3xl font-bold text-[#682a2a] text-center m-6">
        What we offer!!
      </h2>
      <div className="relative overflow-hidden p-4">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            isTransitioning ? '' : 'transition-none'
          }`}
          style={{
            transform: `translateX(-${(currentIndex + totalCards) * (100 / itemsPerView)}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {loopedCards.map((card, index) => (
            <div
              key={index}
              className="flex-none w-full md:w-1/3 lg:w-1/4 p-2"
              style={{ minWidth: `${100 / itemsPerView}%` }}
            >
              <div
                style={{
                  backgroundImage: `url(${card.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-full h-64 md:h-80 lg:h-96 bg-gray-300 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              ></div>
            </div>
           
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Carousel;
