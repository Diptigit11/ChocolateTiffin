import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const baseURL = import.meta.env.VITE_API_BASE_URL;
      console.log('Logging in with:', { username, password });
      const response = await axios.post(`${baseURL}/api/auth/login`, { username, password }, {
        withCredentials: true
      });
      console.log('Login response:', response.data);
      if (response.data.message === 'Logged in successfully') {
        toast.success("Logged in Successfully!");
        setTimeout(() => {
          navigate('/cart');
        }, 2000);
      } else {
        setError('Invalid credentials');
        toast.error('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError(error.response?.data?.message || 'An error occurred');
      toast.error("Login failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:bg-orange-700"
          >
            Login
          </button>
          <Link to="/signin">
            <button
              type="button"
              className="w-full pt-4 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:bg-orange-700"
            >
              Sign In
            </button>
          </Link>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
