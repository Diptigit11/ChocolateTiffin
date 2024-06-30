import mongoose from 'mongoose';

const { Schema } = mongoose;

const WeightOptionSchema = new Schema({
  weight: { type: String, required: true },
  price: { type: Number, required: true },
});

const CakeSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  src: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  weightOptions: [WeightOptionSchema],
  category: { type: String, enum: ['CakeImageData', 'Animal_theme_cakes', 'Barbie_Cakes'] },
  quantity: { type: Number, required: true }, // Add quantity field
});

const Cart = mongoose.model('Cart', CakeSchema);

export default Cart;
