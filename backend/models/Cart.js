import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the schema for cake weight options
const WeightOptionSchema = new Schema({
  weight: { type: String, required: true },
  price: { type: Number, required: true },
});

// Define the schema for reviews
// const ReviewSchema = new Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   rating: { type: Number, required: true },
//   comment: { type: String, required: true },
//   date: { type: Date, default: Date.now },
// });

// Define the schema for cakes
const CakeSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  src: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  // reviews: [ReviewSchema],
  weightOptions: [WeightOptionSchema],
  category: { type: String, enum: ['CakeImageData', 'Animal_theme_cakes', 'Barbie_Cakes'], required: true },
});

const Cart = mongoose.model('Cart', CakeSchema);

export default Cart;
