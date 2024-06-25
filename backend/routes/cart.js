import express from 'express';
import CartItem from '../models/CartItem.js'; // Ensure .js extension is used
import authMiddleware from '../middleware/authMiddleware.js'; // Ensure .js extension is used
const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  try {
    const cart = await CartItem.findOne({ userId: req.user.id });
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/add', authMiddleware, async (req, res) => {
  const { productId, name, quantity, price } = req.body;
  try {
    let cart = await CartItem.findOne({ userId: req.user.id });
    if (!cart) {
      cart = new CartItem({ userId: req.user.id, items: [] });
    }
    const itemIndex = cart.items.findIndex(item => item.productId === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, name, quantity, price });
    }
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
