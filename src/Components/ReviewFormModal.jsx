// ReviewFormModal.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewFormModal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [hover, setHover] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onSubmit({ name, email, rating, title, review });
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        {submitted ? (
          <div className="text-center">
            <p className="text-lg font-semibold">Thank you for your review!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4">Write a review</h2>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Rating</label>
              <div className="flex space-x-1">
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        className="hidden"
                      />
                      <FaStar
                        size={24}
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        className="cursor-pointer transition duration-200"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter review title"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Your review</label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter your review"
                rows="4"
                required
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ReviewFormModal;
