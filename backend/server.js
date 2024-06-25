import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js'; // Ensure the path is correct
import cartRoutes from './routes/cart.js'; // Ensure the path is correct

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS and specify allowed origins
app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL
  credentials: true, // Allow cookies to be sent
}));

app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
