// models/CartItem.js
import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ]
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

export default CartItem;
