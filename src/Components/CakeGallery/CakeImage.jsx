import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CakeImageData } from './CakeImagesData';
import { useSwipeable } from 'react-swipeable';

function CakeImage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewAll, setViewAll] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? CakeImageData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === CakeImageData.length - 1 ? 0 : prevIndex + 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl p-2 font-bold text-[#682a2a]">Our Products</h1>
        <button
          onClick={() => setViewAll(!viewAll)}
          className="hidden sm:block align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#682a2a] text-white shadow-md shadow-[#682a2a]/10 hover:shadow-lg hover:shadow-[#682a2a]/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          {viewAll ? 'Show Less' : 'View All'}
        </button>
      </div>

      {/* Desktop View */}
      {!viewAll ? (
        <div className="hidden sm:flex relative justify-center items-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 bg-[#682a2a] text-white p-2 rounded-full shadow-lg z-10"
          >
            &lt;
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-transform duration-500">
            {CakeImageData.slice(currentIndex, currentIndex + 4).map((cake, index) => (
              <div
                key={index}
                className="relative flex flex-col mt-6 text-[#682a2a] bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-80 lg:w-96 m-4"
              >
                <div className="relative h-64 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={cake.src}
                    alt={cake.caption}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="px-6 pt-6 pb-2">
                  <h5 className="block mb-1 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[#682a2a]">
                    {cake.caption}
                  </h5>
                </div>
                <div className="px-6 pb-6 pt-0 flex justify-between space-x-4">
                  <Link to={`/cake-details/${cake.id}`}>
                    <button
                      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#682a2a] text-white shadow-md shadow-[#682a2a]/10 hover:shadow-lg hover:shadow-[#682a2a]/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                      type="button"
                    >
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 bg-[#682a2a] text-white p-2 rounded-full shadow-lg z-10"
          >
            &gt;
          </button>
        </div>
      ) : (
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CakeImageData.map((cake) => (
            <div
              key={cake.id}
              className="relative flex flex-col mt-6 text-[#682a2a] bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-80 lg:w-96 m-4"
            >
              <div className="relative h-64 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                  src={cake.src}
                  alt={cake.caption}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="px-6 pt-6 pb-2">
                <h5 className="block mb-1 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[#682a2a]">
                  {cake.caption}
                </h5>
              </div>
              <div className="px-6 pb-6 pt-0 flex justify-between space-x-4">
                <Link to={`/cake-details/${cake.id}`}>
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#682a2a] text-white shadow-md shadow-[#682a2a]/10 hover:shadow-lg hover:shadow-[#682a2a]/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mobile View */}
      {!viewAll && (
        <div className="sm:hidden relative flex justify-center items-center" {...handlers}>
          <button
            onClick={handlePrev}
            className="absolute left-4 bg-[#682a2a] text-white p-2 rounded-full shadow-lg z-10"
          >
            &lt;
          </button>
          <div
            key={CakeImageData[currentIndex].id}
            className="relative flex flex-col text-[#682a2a] bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-80 lg:w-96"
          >
            <div className="relative h-64 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src={CakeImageData[currentIndex].src}
                alt={CakeImageData[currentIndex].caption}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <button
                onClick={() => setViewAll(true)}
                className="absolute top-2 right-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-[#682a2a] text-white shadow-md shadow-[#682a2a]/10 hover:shadow-lg hover:shadow-[#682a2a]/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none z-20"
                type="button"
              >
                View All
              </button>
            </div>
            <div className="px-6 pt-6 pb-2">
              <h5 className="block mb-1 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[#682a2a]">
                {CakeImageData[currentIndex].caption}
              </h5>
            </div>
            <div className="px-6 pb-6 pt-0 flex justify-between space-x-4">
              <Link to={`/cake-details/${CakeImageData[currentIndex].id}`}>
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#682a2a] text-white shadow-md shadow-[#682a2a]/10 hover:shadow-lg hover:shadow-[#682a2a]/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  See Details
                </button>
              </Link>
            </div>
          </div>
          <button
            onClick={handleNext}
            className="absolute right-4 bg-[#682a2a] text-white p-2 rounded-full shadow-lg z-10"
          >
            &gt;
          </button>
        </div>
      )}

      {viewAll && (
        <div className="sm:hidden flex flex-col items-center space-y-4">
          {CakeImageData.map((cake, index) => (
            <div
              key={cake.id}
              className={`relative flex flex-col text-[#682a2a] bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-80 lg:w-96 transition-transform duration-500 ${viewAll ? 'block' : 'hidden'}`}
            >
              <div className="relative h-64 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                  src={cake.src}
                  alt={cake.caption}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="px-6 pt-6 pb-2">
                <h5 className="block mb-1 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[#682a2a]">
                  {cake.caption}
                </h5>
              </div>
              <div className="px-6 pb-6 pt-0 flex justify-between space-x-4">
                <Link to={`/cake-details/${cake.id}`}>
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#682a2a] text-white shadow-md shadow-[#682a2a]/10 hover:shadow-lg hover:shadow-[#682a2a]/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
          <button
            onClick={() => setViewAll(false)}
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#682a2a] text-white shadow-md shadow-[#682a2a]/10 hover:shadow-lg hover:shadow-[#682a2a]/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
}

export default CakeImage;
