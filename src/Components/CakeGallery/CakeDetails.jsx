import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  CakeImageData, Animal_theme_cakes, Barbie_Cakes, CakesForHer, BikeCakes,
  CricketCakes, FrozenThemeCakes, GymCakes, PinataCakes, SuperheroCakes, WeddingCakes,
  AnniversaryCakes, BossBaby, BabyGirl, BabyBoy, DogLovers, CarCakes, CakesForHim,
  FootballCakes, HalfYear, Peppa_Pig_Cakes, TravelCakes, Baby_Shower_Cakes, ButterFly_Cakes,
  Bachelorette_cakes, farewell_cakes, make_up_cakes, spider_man_cakes, unicorn_cakes,
  desserts, cheesecakes, Pastry, celebration_cakes
} from './CakeImagesData'; // Adjust import as needed
import { useCart } from '../CartContext';
import ShowReview from '../ShowReview';

function CakeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cakeId = parseInt(id, 10);
  const { addCake, fetchTotalItems } = useCart();

  // Find cake in either CakeImageData or any other category
  const cake = CakeImageData.find(cake => cake.id === cakeId) ||
    Barbie_Cakes.find(cake => cake.id === cakeId) ||
    Animal_theme_cakes.find(cake => cake.id === cakeId) ||
    CakesForHer.find(cake => cake.id === cakeId) ||
    BikeCakes.find(cake => cake.id === cakeId) ||
    CricketCakes.find(cake => cake.id === cakeId) ||
    FrozenThemeCakes.find(cake => cake.id === cakeId) ||
    GymCakes.find(cake => cake.id === cakeId) ||
    PinataCakes.find(cake => cake.id === cakeId) ||
    SuperheroCakes.find(cake => cake.id === cakeId) ||
    WeddingCakes.find(cake => cake.id === cakeId) ||
    AnniversaryCakes.find(cake => cake.id === cakeId) ||
    BossBaby.find(cake => cake.id === cakeId) ||
    BabyBoy.find(cake => cake.id === cakeId) ||
    BabyGirl.find(cake => cake.id === cakeId) ||
    DogLovers.find(cake => cake.id === cakeId) ||
    CarCakes.find(cake => cake.id === cakeId) ||
    CakesForHim.find(cake => cake.id === cakeId) ||
    FootballCakes.find(cake => cake.id === cakeId) ||
    HalfYear.find(cake => cake.id === cakeId) ||
    Peppa_Pig_Cakes.find(cake => cake.id === cakeId) ||
    TravelCakes.find(cake => cake.id === cakeId) ||
    Baby_Shower_Cakes.find(cake => cake.id === cakeId) ||
    ButterFly_Cakes.find(cake => cake.id === cakeId) ||
    Bachelorette_cakes.find(cake => cake.id === cakeId) ||
    farewell_cakes.find(cake => cake.id === cakeId) ||
    make_up_cakes.find(cake => cake.id === cakeId) ||
    spider_man_cakes.find(cake => cake.id === cakeId) ||
    unicorn_cakes.find(cake => cake.id === cakeId) ||
    desserts.find(cake => cake.id === cakeId) ||
    cheesecakes.find(cake => cake.id === cakeId) ||
    Pastry.find(cake => cake.id === cakeId) ||
    celebration_cakes.find(cake => cake.id === cakeId);

  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(cake?.weightOptions?.[0] || {});
  const [averageRating, setAverageRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => Math.max(prevQuantity + amount, 1));
  };

  const handleWeightSelect = (weightOption) => {
    setSelectedWeight(weightOption);
  };

  const handleAddToCart = async () => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
      return;
    }

    try {
      const newCake = await addCake(cake.name, cake.src, cake.description, cake.rating, selectedWeight, cake.category, quantity); // Include quantity
      console.log('Added to cart:', newCake);
      navigate('/cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const updateReviewData = (reviews) => {
    setReviewCount(reviews.length);
    if (reviews.length > 0) {
      const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
      setAverageRating((totalRating / reviews.length).toFixed(1));
    } else {
      setAverageRating(0);
    }
  };

  // Check if cake is not found
  if (!cake) {
    return <div className="container mx-auto p-4 mt-20">Cake not found</div>;
  }

  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <img
            src={cake.src}
            alt={cake.name}
            className="w-full rounded shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-2">{cake.name}</h1>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">{"★".repeat(Math.round(averageRating))}</span>
            <span className="ml-2 text-gray-600">{reviewCount} Review(s)</span>
          </div>
          {selectedWeight && selectedWeight.price && (
            <p className="text-xl font-bold text-red-600 mb-4">MRP: ₹ {selectedWeight.price}</p>
          )}
          <p className="text-gray-600 mb-4">Inclusive of taxes</p>
          {cake.weightOptions && (
            <div className="mb-4">
              <span className="block font-semibold mb-2">Weight *</span>
              <div className="flex space-x-2">
                {cake.weightOptions.map(option => (
                  <button
                    key={option.weight}
                    onClick={() => handleWeightSelect(option)}
                    className={`px-4 py-2 border rounded ${option.weight === selectedWeight.weight ? 'border-orange-600 text-orange-600' : 'border-gray-300'}`}
                  >
                    {option.weight}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="mb-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Instant Delivery Available</button>
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block font-semibold mb-2">Quantity:</label>
            <div className="flex items-center space-x-2">
              <button onClick={() => handleQuantityChange(-1)} className="px-3 py-2 border rounded">-</button>
              <input
                type="text"
                id="quantity"
                className="w-12 text-center border rounded"
                value={quantity}
                readOnly
              />
              <button onClick={() => handleQuantityChange(1)} className="px-3 py-2 border rounded">+</button>
            </div>
          </div>
          <button onClick={handleAddToCart} className="bg-orange-600 text-white px-6 py-3 rounded">ADD TO CART</button>

          <div className="mt-6">
            <p className="font-bold text-black">{cake.description}</p>
          </div>
        </div>
      </div>

      <ShowReview productId={id} updateReviewData={updateReviewData} />
    </div>
  );
}

export default CakeDetails;
