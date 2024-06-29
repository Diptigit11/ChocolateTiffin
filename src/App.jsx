// src/App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './Components/Loader';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Wp from './Components/Wp';
import AppRoutes from './AppRoutes';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust this time based on your requirements
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen mt-20">
      <Router>
        <div className="min-h-screen">
          <Wp />
          <Navbar />
          <AppRoutes />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
