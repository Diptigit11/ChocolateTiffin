import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import Cart from '../models/Cart.js';

const router = express.Router();

router.post('/add', authMiddleware, async (req, res) => {
  const { productId, name, quantity, selectedWeight, price } = req.body;
  const userId = req.user._id;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, name, quantity, selectedWeight, price });
      }

      await cart.save();
    } else {
      cart = new Cart({
        userId,
        items: [{ productId, name, quantity, selectedWeight, price }],
      });
      await cart.save();
    }

    res.status(201).json(cart);
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ message: 'An error occurred while adding to cart' });
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id }).populate('items.productId');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ message: 'An error occurred while fetching the cart' });
  }
});

router.delete('/remove/:itemId', authMiddleware, async (req, res) => {
  const { itemId } = req.params;
  const userId = req.user._id;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      cart.items = cart.items.filter(item => item._id.toString() !== itemId);
      await cart.save();
      res.json(cart);
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
    res.status(500).json({ message: 'An error occurred while removing from cart' });
  }
});

export default router;
