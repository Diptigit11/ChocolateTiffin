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
        toast.success("Signed in Successfully!");
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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-yellow">
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-[#bb2d5a] hover:underline">
          Sign in to your account
        </h2>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-opacity-50 bg-[#ffaac5]  bg-blur-md border-2 border-stone-50 backdrop-filter backdrop-blur-md backdrop-saturate-150 rounded-lg p-6 shadow-2xl">
          <form className="space-y-6" onSubmit={handelSubmit}>
            <div className="my -5">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-[#5e152c]">
                Name
              </label>
              <div className="mt-2 my-5">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  onChange={onchange}
                  placeholder="Your Sweet Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#bb2d5a] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#5e152c]">
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#bb2d5a] sm:text-sm sm:leading-6"
              />
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-[#5e152c]">
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
                onChange={onchange}
                placeholder="This is a secret"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#bb2d5a] sm:text-sm sm:leading-6"
              />
            </div>
            <div className="my-4">
              <div className="flex items-center justify-between">
                <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-[#5e152c]">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={onchange}
                  placeholder="...."
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#bb2d5a] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-[#bb2d5a] hover:shadow-lg  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#ff578d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus:ring-[#bb2d5a]">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn;
