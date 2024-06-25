import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CakeImageData from './CakeImagesData';
import ReviewFormModal from './../ReviewFormModal';

function CakeDetails() {
  const { id } = useParams();
  const cakeId = parseInt(id, 10);
  const cake = CakeImageData.find(cake => cake.id === cakeId);

  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(cake.weightOptions[0]);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + amount, 1));
  };

  const handleWeightSelect = (weight) => {
    setSelectedWeight(weight);
  };

  const handleReviewSubmit = (reviewData) => {
    console.log('Review submitted:', reviewData);
  };

  const handleAddToCart = async () => {
    try {
      const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: cakeId,
          name: cake.name,
          quantity,
          price: cake.price,
        }),
      });

      if (response.status === 401) {
        window.location.href = '/login';
      } else {
        window.location.href = '/cart';  // Redirect to cart page if item is added successfully
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  if (!cake) {
    return <div>Cake not found</div>;
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
            <span className="text-yellow-500">{"★".repeat(cake.rating)}</span>
            <span className="ml-2 text-gray-600">{cake.reviews} Review(s)</span>
            <button onClick={() => setIsReviewModalOpen(true)} className="ml-2 text-blue-600">
              Write a review
            </button>
          </div>
          <p className="text-xl font-bold text-red-600 mb-4">MRP: ₹ {cake.price}</p>
          <p className="text-gray-600 mb-4">Inclusive of taxes</p>
          <div className="mb-4">
            <span className="block font-semibold mb-2">Weight *</span>
            <div className="flex space-x-2">
              {cake.weightOptions.map(weight => (
                <button
                  key={weight}
                  onClick={() => handleWeightSelect(weight)}
                  className={`px-4 py-2 border rounded ${weight === selectedWeight ? 'border-orange-600 text-orange-600' : 'border-gray-300'}`}
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>
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
            <p className="text-gray-700">{cake.description}</p>
          </div>
        </div>
      </div>
      <ReviewFormModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmit={handleReviewSubmit}
      />
    </div>
  );
}

export default CakeDetails;
