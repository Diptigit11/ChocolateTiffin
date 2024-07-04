import express from 'express';
import fetchuser from '../middleware/authMiddleware.js';
import Review from '../models/Review.js';
import mongoose from 'mongoose'; 

const Reviewrouter = express.Router();

Reviewrouter.post('/add/:productId', fetchuser, async (req, res) => {
  try {
    const { name, rating, title, review } = req.body;
    const { productId } = req.params; // Get productId from URL params 
    
    const existingReview = await Review.findOne({ userId: req.user.id, productId }); // Check if the user has already reviewed this product
    if (existingReview) {
      return res.status(400).json({ message: 'You have already reviewed this product.' });
    }
    const newReview = new Review({   // Create a new review
      userId: req.user.id,
      name,
      rating,
      title,
      review,
      productId,
    });
    const savedReview = await newReview.save();  // Save the new review to the database

    res.status(201).json(savedReview);   // Send the saved review as a response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



// Route to fetch reviews for a specific product
Reviewrouter.get('/fetchreview/:productId',  async (req, res) => {
  try {
    const { productId } = req.params;                  // Extract the productId from the request parameters (URL)
    const reviews = await Review.find({ productId });  // Query the Review model to find all reviews for the specified product
    res.json(reviews);                                 // Respond with the reviews in JSON format
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');              // If an error occurs, respond with a 500 status code and an error message
  }
});

Reviewrouter.delete('/deletereview/:reviewId', fetchuser, async (req, res) => {
  try {
    const { reviewId } = req.params;      // Extract review id from URL
    const userId = req.user.id;           // Extract user id from authenticated user

    // Find and delete the review by reviewId and userId
    const review = await Review.findOneAndDelete({ _id: reviewId, userId });

    if (!review) {                        // If review not found or user not authorized
      return res.status(404).json({ message: 'Review not found or not authorized to delete' });
    }

    res.json({ message: 'Review deleted successfully' });
  } catch (error) {                       // Catch any errors that occur
    console.error(error.message);
    res.status(500).send('Server error');
  }
});




export default Reviewrouter;
