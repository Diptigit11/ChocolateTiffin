import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../Components/CartContext';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const { getCake } = useCart();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://chocolate-tiffin-backend1.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    });

    const json = await response.json();

    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      toast.success("Logged in Successfully! Enjoy the deliciousness of cake ");
      await getCake();
      navigate("/");
    } else {
      alert("Invalid credentials");
      toast.error("Login failed!");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div
        className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat p-4"
        style={{ backgroundImage: `url(${"https://cdn.leonardo.ai/users/2ba60e8e-3fe6-436d-802a-e03816df2598/generations/a1156581-cd1c-4813-a339-736857a2b9c3/Default_a_light_theme_celebration_cake_image_1.jpg"})` }}
      >
        <div className="bg-white bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-[#9a3e3e] hover:underline mb-6">
            Login
          </h2>
          <form className="space-y-6" onSubmit={handelSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-bold leading-6 text-[#5e152c]">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={onChange}
                  required
                  placeholder="Enter your email address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#9a3e3e] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-bold leading-6 text-[#5e152c]">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={onChange}
                  placeholder="This is a secret"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#9a3e3e] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#8c3939] hover:shadow-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#9a3e3e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-[#5e152c]">
            Don't have an account?{' '}
            <Link to="/signin" className="font-semibold leading-6 text-[#9a3e3e] hover:underline">
              Please sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
