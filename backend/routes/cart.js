import express from 'express';
import Cart from '../models/Cart.js';
import fetchuser from '../middleware/authMiddleware.js';

const Cartrouter = express.Router();

// Add Cake
Cartrouter.post('/add', fetchuser, async (req, res) => {
  console.log('POST /api/cart/add triggered');
  const { name, src, description, rating, weightOptions, category } = req.body;

  try {
    const cake = new Cart({
      userId: req.user.id,
      name,
      src,
      description,
      rating,
      weightOptions,
      category,
    });

    await cake.save();
    res.json(cake);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// Delete Cake
Cartrouter.delete('/delete/:id', fetchuser, async (req, res) => {
  const cakeId = req.params.id;

  try {
    const cake = await Cart.findOneAndDelete({ _id: cakeId, userId: req.user.id });
    if (!cake) {
      return res.status(404).json({ error: "Cake not found or not authorized" });
    }
    res.json({ message: "Cake deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// Fetch Cakes
Cartrouter.get('/fetch', fetchuser, async (req, res) => {
  try {
    const cakes = await Cart.find({ userId: req.user.id });
    res.json(cakes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

export default Cartrouter;
