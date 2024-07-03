import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { TrashIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from './CartContext';

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

const ShowReview = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { fetchReviews, deleteReview } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchReviews(productId);
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [productId, fetchReviews]);

  const handleDelete = async (reviewId) => {
    try {
      await deleteReview(reviewId);
      setReviews(reviews.filter(review => review._id !== reviewId));
      toast.success("Review deleted successfully");
    } catch (error) {
      console.error('Failed to delete review:', error);
      toast.error('Failed to delete review');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto font-sans">
      <h1 className=''>Reviews</h1>
      {reviews.map((review) => (
        <div className="flex items-start mb-8 pb-4 border-b border-gray-200" key={review._id}>
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
          <button onClick={() => handleDelete(productId)} className="text-red-500">
            <TrashIcon className="w-6 h-6" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowReview;
