import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/auth.js';
import Cartrouter from './routes/cart.js'; // Import cart routes
import Reviewrouter from './routes/review.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://chocolatetiffin.onrender.com',
  credentials: true,
}));

app.use(express.json());

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB: ', err);
  });

app.use('/api/auth',router);
app.use('/api/cart', Cartrouter); // Use cart routes
app.use('/api/review',Reviewrouter);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
