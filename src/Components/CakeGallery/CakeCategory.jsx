import React from 'react';
import { Link } from 'react-router-dom';

function CakeCategory({ cakes, title }) {
  return (
    <div className="p-5">
      <h1 className="text-4xl p-2 font-bold text-[#682a2a] mb-6 text-center">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {cakes.map((cake) => (
          <div key={cake.id} className="relative flex flex-col mt-6 text-[#682a2a] bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-80 lg:w-96 m-4">
            <div className="relative h-64 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src={cake.src}
                alt={cake.caption}
                className="absolute top-0 left-0 w-full h-full object-center transition-transform duration-500 hover:scale-105"
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
                  type="button">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CakeCategory;
