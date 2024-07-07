import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;
  
    if (password !== cpassword) {
      toast.error("Passwords do not match!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
  
      const json = await response.json();
      console.log(json);
  
      if (json.success) {
        localStorage.setItem('token', json.authtoken);
        navigate("/");
        toast.success("Signed in Successfully! Enjoy the deliciousness of cake ");
      } else {
        toast.error(json.error || "Error in signing in!");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Error: " + error.message);
    }
  }
  

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat p-4"
        style={{ backgroundImage: `url(${"https://cdn.leonardo.ai/users/2ba60e8e-3fe6-436d-802a-e03816df2598/generations/d111cf9b-1bfc-4aab-b40f-01161019caec/Default_a_light_theme_celebration_cake_image_with_cake_image_2.jpg"})` }}
      >
        <div className="bg-white bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-[#8c3939] hover:underline mb-6">
            Sign in to your account
          </h2>
          <form className="space-y-6" onSubmit={handelSubmit}>
            <div className="my-5">
              <label htmlFor="name" className="block text-sm  font-bold leading-6 text-[#5e152c]">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  onChange={onchange}
                  placeholder="Your Sweet Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#8c3939] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
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
                  required
                  placeholder="sweetname@gmail.com"
                  onChange={onchange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#8c3939] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-bold leading-6 text-[#5e152c]">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={onchange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#8c3939] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="my-4">
              <label htmlFor="cpassword" className="block text-sm font-bold leading-6 text-[#5e152c]">
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={onchange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#8c3939] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-[#8c3939] hover:shadow-lg  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#9a3e3e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus:ring-[#bb2d5a]">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default SignIn;
