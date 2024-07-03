import express from 'express';
import fetchuser from '../middleware/authMiddleware.js';
import Review from '../models/Review.js';
import mongoose from 'mongoose'; // Ensure mongoose is imported


const Reviewrouter = express.Router();

Reviewrouter.post('/add/:productId', fetchuser, async (req, res) => {
  try {
    const { name, rating, title, review } = req.body;
    const { productId } = req.params; // Get productId from URL params

 
    // Check if the user has already reviewed this product
    const existingReview = await Review.findOne({ userId: req.user.id, productId });
    if (existingReview) {
      return res.status(400).json({ message: 'You have already reviewed this product.' });
    }

    // Create a new review
    const newReview = new Review({
      userId: req.user.id,
      name,
      rating,
      title,
      review,
      productId,
    });

    // Save the new review to the database
    const savedReview = await newReview.save();

    // Send the saved review as a response
    res.status(201).json(savedReview);
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

Reviewrouter.delete('/deletereview/:productId', fetchuser, async (req, res) => {
  try {
    const { productId } = req.params;      //take out product id from url
    const userId = req.user.id;            //take out userid
    const review = await Review.findOneAndDelete({ productId, userId });    // Find the review by productId and userId

    if (!review) {                   //if review not found shows message
      return res.status(404).json({ message: 'Review not found or not authorized to delete' });
    }
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {               //if any error occurred
    console.error(error.message);
    res.status(500).send('Server error');
  }
});




export default Reviewrouter;
