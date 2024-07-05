import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { TrashIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from './CartContext';
import ReviewFormModal from './ReviewFormModal'; // Import your modal

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  const nameParts = name.split(' ');
  const initials = nameParts.length === 1 
    ? nameParts[0][0] 
    : `${nameParts[0][0]}${nameParts[1][0]}`;

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: initials,
  };
}

const ShowReview = ({ productId, updateReviewData }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal

  const { fetchReviews, deleteReview } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchReviews(productId);
        setReviews(data);
        updateReviewData(data); // Update parent component with review data
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [productId, fetchReviews, updateReviewData]);

  const handleDelete = async (reviewId) => {
    try {
      await deleteReview(reviewId);
      const updatedReviews = reviews.filter(review => review._id !== reviewId);
      setReviews(updatedReviews);
      updateReviewData(updatedReviews); // Update parent component with updated review data
      toast.success("Review deleted successfully");
    } catch (error) {
      console.error('Failed to delete review:', error);
      toast.error('Failed to delete review');
    }
  };

  const handleNewReview = (newReview) => {
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews); // Add new review to the state
    updateReviewData(updatedReviews); // Update parent component with new review data
  };


  const handleWriteReview = () => {
    if (!localStorage.getItem('token')) {
      setIsModalOpen(false);
      toast.info('Please log in to write a review.');
    } else {
      setIsModalOpen(true);
    }
  };

  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1); // Round to 1 decimal place
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto font-sans">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h1 className="text-4xl text-[#682a2a] font-bold">Reviews</h1>
         
        </div>
        <button onClick={handleWriteReview} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Write a Review</button>
      </div>
      <span className="ml-4 text-xl text-gray-700">Total review: {reviews.length}</span>
          <div className="flex items-center ml-4 text-yellow-500">
            {'★'.repeat(Math.round(calculateAverageRating(reviews)))}
            {'☆'.repeat(5 - Math.round(calculateAverageRating(reviews)))}
            <span className="ml-2 text-xl text-gray-700">{calculateAverageRating(reviews)}</span>
          </div>
      {reviews.map((review) => (
        <div className="flex items-start  mt-10 pb-4 border-b border-gray-200" key={review._id}>
          <Avatar {...stringAvatar(review.name)} className="mr-4" />
          <div>
            <h3 className="text-xl font-semibold">{review.name}</h3>
            <div className="text-yellow-500">
              {'★'.repeat(review.rating)}
            </div>
            <h4 className="text-lg">{review.title}</h4>
            <p className="text-gray-700">{review.review}</p>
            <p className="text-gray-500 text-sm">{new Date(review.createdAt).toLocaleDateString()}</p>
          </div>
          <button onClick={() => handleDelete(review._id)} className="text-red-500">
            <TrashIcon className="w-6 h-6" />
          </button>
        </div>
      ))}
      <ReviewFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleNewReview} 
        productId={productId} 
      />
    </div>
  );
};

export default ShowReview;
