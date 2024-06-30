import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handelSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/login", {
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
      console.log(json);
  
      if (json.success) {
        //save the auth token and redirect
        localStorage.setItem('token', json.authtoken);
        toast.success("Logged in  Successfully! Enjoy the deliciousness of cake ");
        navigate("/");
  
      }
      else {
        alert("Invalid credentials");
        toast.error("Logged in  failed! ");
      }
  }

  const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
      <>
      <div className="flex min-h-screen flex-1 flex-col  px-6 py-12 lg:px-8  bg-yellow">
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-[#bb2d5a]  hover:underline">
              Login
          </h2>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-opacity-50 bg-[#ffaac5] bg-blur-md border-2 border-stone-50 backdrop-filter backdrop-blur-md backdrop-saturate-150 rounded-lg p-6 shadow-2xl">
              <form className="space-y-6" onSubmit={handelSubmit}>
                  <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#5e152c]">
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
                              className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#bb2d5a] sm:text-sm sm:leading-6"
                          />
                      </div>
                  </div>

                  <div>
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
                              onChange={onChange}
                              placeholder="This is a secret"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#bb2d5a] sm:text-sm sm:leading-6"
                          />
                      </div>
                  </div>

                  <div>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-[#bb2d5a] hover:shadow-lg  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#ff578d]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

Login

</button>
    
                  </div>
              </form>
          </div>
      </div>
      </>
  );
}

export default Login;
