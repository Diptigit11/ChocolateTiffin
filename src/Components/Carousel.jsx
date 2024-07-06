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

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-[#682a2a] text-center m-6">
        What we offer!!
      </h2>
      <div className="relative overflow-hidden p-4">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <div className="flex overflow-hidden transition-transform duration-300 ease-in-out">
          {cards.slice(currentIndex, currentIndex + itemsPerView).map((card, index) => (
            <div key={card.id} className="flex-none w-full md:w-1/3 lg:w-1/4 p-2">
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
          {currentIndex + itemsPerView > cards.length && 
            cards.slice(0, (currentIndex + itemsPerView) % cards.length).map((card, index) => (
              <div key={card.id} className="flex-none w-full md:w-1/3 lg:w-1/4 p-2">
                <div
                  style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-full h-64 md:h-80 lg:h-96 bg-gray-300 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                ></div>
              </div>
            ))
          }
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default Carousel;

const cards = [
  { url: image1, id: 1 },
  { url: image2, id: 2 },
  { url: image3, id: 3 },
  { url: image4, id: 4 },
  { url: image5, id: 5 },
  { url: image6, id: 6 },
  { url: image7, id: 7 },
];
