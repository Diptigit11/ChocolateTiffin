// src/pages/SearchPage.jsx
import React, { useEffect, useState } from 'react';
import CakeCategory from './../CakeGallery/CakeCategory';
import {
  CakeImageData,
  Animal_theme_cakes,
  Barbie_Cakes,
  CakesForHer,
  BikeCakes,
  CricketCakes,
  FrozenThemeCakes,
  GymCakes,
  PinataCakes,
  WeddingCakes,
  AnniversaryCakes,
  BossBaby,
  CakesForHim,
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
  unicorn_cakes,
  Pastry,
  celebration_cakes,
  cheesecakes,
  donuts,
  brownie,
  cupcakes
} from './../CakeGallery/CakeImagesData';

import { useSearch } from './SearchContext'; // Corrected import path for useSearch

// Group cakes by category
const allCakes = {
  CakeImageData,
  Animal_theme_cakes,
  Barbie_Cakes,
  CakesForHer,
  BikeCakes,
  CricketCakes,
  FrozenThemeCakes,
  GymCakes,
  PinataCakes,
  WeddingCakes,
  AnniversaryCakes,
  BossBaby,
  CakesForHim,
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
  unicorn_cakes,
  Pastry,
  celebration_cakes,
  cheesecakes,
  donuts,
  brownie,
  cupcakes
};

const SearchPage = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const [filteredCakes, setFilteredCakes] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    let foundCakes = [];

    // Search in categories
    Object.keys(allCakes).forEach(category => {
      if (category.toLowerCase().includes(query)) {
        foundCakes = [...foundCakes, ...allCakes[category]];
      } else {
        const cakesInCategory = allCakes[category].filter(cake =>
          cake.name.toLowerCase().includes(query) ||
          cake.caption.toLowerCase().includes(query)
        );
        foundCakes = [...foundCakes, ...cakesInCategory];
      }
    });

    setFilteredCakes(foundCakes);
    setNoResults(foundCakes.length === 0); // Check if filtered array is empty
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query state
  };

  return (
<div className="mt-8">
        {noResults ? (
          <div className="flex justify-center items-center h-full py-20">
            <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-700">Sorry</h2>
              <h2 className="text-gray-600 font-bold mt-2">No results for "{searchQuery}". Don't worry, we have plenty of other delicious cakes to explore!</h2>
            </div>
          </div>
        ) : (
          <CakeCategory cakes={filteredCakes} title={`Search Results for "${searchQuery}"`} />
        )}
      </div>
  );
};

export default SearchPage;
