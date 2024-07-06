import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import {
  CakeImageData, Animal_theme_cakes, Barbie_Cakes, CakesForHer, BikeCakes,
  CricketCakes, FrozenThemeCakes, GymCakes, PinataCakes, WeddingCakes,
  AnniversaryCakes, BossBaby, CakesForHim,
  FootballCakes, HalfYear, Peppa_Pig_Cakes, TravelCakes, Baby_Shower_Cakes, ButterFly_Cakes,
  Bachelorette_cakes, farewell_cakes, make_up_cakes, spider_man_cakes, unicorn_cakes,
  desserts, cheesecakes, Pastry, celebration_cakes, brownie, cupcakes, donuts
} from './CakeImagesData';
import { useCart } from '../CartContext';
import ShowReview from '../ShowReview';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import 'react-toastify/dist/ReactToastify.css';

function CakeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cakeId = parseInt(id, 10);
  const { addCake } = useCart();

  const allCakes = [
    ...CakeImageData, ...Animal_theme_cakes, ...Barbie_Cakes, ...CakesForHer, ...BikeCakes,
    ...CricketCakes, ...FrozenThemeCakes, ...GymCakes, ...PinataCakes, ...WeddingCakes,
    ...AnniversaryCakes, ...BossBaby, ...CakesForHim, ...FootballCakes, ...HalfYear,
    ...Peppa_Pig_Cakes, ...TravelCakes, ...Baby_Shower_Cakes, ...ButterFly_Cakes,
    ...Bachelorette_cakes, ...farewell_cakes, ...make_up_cakes, ...spider_man_cakes,
    ...unicorn_cakes, ...desserts, ...cheesecakes, ...Pastry, ...celebration_cakes,
    ...brownie, ...cupcakes, ...donuts
  ];

  const cake = allCakes.find(cake => cake.id === cakeId);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(cake?.weightOptions?.[0] || {});
  const [averageRating, setAverageRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cake && cake.weightOptions) {
      setSelectedWeight(cake.weightOptions[0]);
    }
  }, [cake]);

  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => Math.max(prevQuantity + amount, 1));
  };

  const handleWeightSelect = (weightOption) => {
    setSelectedWeight(weightOption);
  };

  const handleAddToCart = async () => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
      toast.info("Login/Signup to add items in cart");
      return;
    }
    try {
      await addCake(
        cake.name,
        cake.src,
        cake.description || "No description available",
        cake.rating,
        selectedWeight,
        cake.category,
        quantity
      );
      navigate('/cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
      setError('Failed to add cake to cart. Please ensure all details are correct.');
      toast.error('Failed to add cake to cart.');
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

  if (!cake) {
    return <div className="container mx-auto p-4 mt-20">Cake not found</div>;
  }

  return (
    <motion.div 
      className="container mx-auto p-4 mt-20"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
    >
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
                    className={`px-4 py-2 border rounded ${option.weight === selectedWeight.weight ? 'border-[#8c3939] text-[#8c3939]' : 'border-gray-300'}`}
                  >
                    {option.weight}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="mb-4">
            <Link to="https://wa.me/+918010126446">
              <button className="bg-green-500 text-white px-4 py-2 rounded">Order via WhatsApp</button>
            </Link>
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
          <button onClick={handleAddToCart} className="bg-[#8c3939] text-white px-6 py-3 rounded">ADD TO CART</button>

          {error && <p className="text-red-500 mt-4">{error}</p>}

          <div className="mt-6">
            <p className="font-bold text-black">{cake.description || "No description available"}</p>
          </div>
        </div>
      </div>

      <ShowReview productId={id} updateReviewData={updateReviewData} />
    </motion.div>
  );
}

export default CakeDetails;
