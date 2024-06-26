import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

const router = express.Router();

// Secret for JWT
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Signup route
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  console.log('Signup attempt:', { username });

  try {
    // Check if the user already exists
    let user = await User.findOne({ username });
    if (user) {
      console.log('Username already exists');
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user and let the pre-save hook hash the password
    user = new User({ username, password });
    await user.save();

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Login attempt:', { username });

  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log('User not found');
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    console.log('User found:', user);

    // Compare passwords using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Password valid:', isPasswordValid);
    if (!isPasswordValid) {
      console.log('Invalid credentials');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Password is valid, create JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    console.log('Generated JWT:', token); // Log the JWT token

    // Set the token in a cookie with httpOnly flag
    res.cookie('token', token, { httpOnly: true }).json({ message: 'Logged in successfully', token }); // Also include the token in the response for debugging
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

export default router;
