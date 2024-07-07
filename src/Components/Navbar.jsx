// src/Components/Navbar.jsx
import React, { useState, useEffect, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useCart } from './CartContext'; // Import the CartContext
import { useSearch } from './SearchBars/SearchContext'; // Corrected import path for useSearch
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import image from '/img/logo.png';

const navItems = [
  { name: 'Cheesecakes', href: '/cheesecakes' },
  { name: 'Pastry', href: '/pastry' },
  { name: 'Celebration Cakes', href: '/celebration-cakes' },
  { name: 'Desserts', href: '#', dropdown: true },
];

const dropdownItems = [
  { name: "Animal Theme Cakes", href: "/animal-theme-cakes" },
  { name: "Barbie Cakes", href: "/barbie-cakes" },
  { name: "Bike Cakes", href: "/bike-cakes" },
  { name: "Cricket Cakes", href: "/cricket-cakes" },
  { name: "Cakes for HER", href: "/cakes-for-her" },
  { name: "Cakes for HIM", href: "/cakes-for-him" },
  { name: "Frozen Theme Cakes", href: "/frozen-theme-cakes" },
  { name: "Gym Cakes", href: "/gym-cakes" },
  { name: "Pinata Cakes", href: "/pinata-cakes" },
  { name: "Wedding Cakes", href: "/wedding-cakes" },
  { name: "Anniversary Cakes", href: "/anniversary-cakes" },
  { name: "Boss Baby", href: "/boss-baby" },
  { name: "Football Cakes", href: "/football-cakes" },
  { name: "Half Year Birthday Cakes", href: "/half-year" },
  { name: "Peppa Pig Cakes", href: "/peppa-pig-cakes" },
  { name: "Travel Theme Cakes", href: "/travel-cakes" },
  { name: "Baby Shower Cakes", href: "/baby-shower-cakes" },
  { name: "Butterfly Cakes", href: "/butterfly-cakes" },
  { name: "Bachelorette Cakes", href: "/bachelorette-cakes" },
  { name: "Farewell Cakes", href: "/farewell-cakes" },
  { name: "Make Up Cakes", href: "/make-up-cakes" },
  { name: "Spider-man Cakes", href: "/spider-man-cakes" },
  { name: "Unicorn Cakes", href: "/unicorn-cakes" },
];


const dessertsDropdownItems = [
  { name: 'Cupcakes', href: '/cupcakes' },
  { name: 'Donuts', href: '/donuts' },
  { name: "Brownie", href: "/brownie" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();
  const { cart, getCake, setCart } = useCart(); // Use the CartContext

  useEffect(() => {
    getCake();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    setCart([]); // Clear the cart
    navigate('/login');
  };

  const handleSearch = () => {
    navigate('/search'); // Navigate to SearchPage
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <div style={{ width: '80px', height: 'auto' }}>
            <img src={image} alt="Logo" style={{ width: '80%', height: 'auto' }} />
          </div>
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <DropdownMenu title="Theme Cakes" items={dropdownItems} />
          {navItems.map((item, index) =>
            item.dropdown ? (
              <DropdownMenu key={index} title={item.name} items={dessertsDropdownItems} />
            ) : (
              <NavItem item={item} key={index} />
            )
          )}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
          {!localStorage.getItem('token') ? (
            <div className="flex space-x-4"> {/* Added margin between buttons */}
              <Link to="/login">
                <button className="px-4 py-2 font-medium text-white bg-[#8c3939] rounded-lg">Log In</button>
              </Link>
              <Link to="/signin">
                <button className="px-4 py-2 font-medium text-[#8c3939] border-2 border-[#8c3939] rounded-lg">Sign Up</button>
              </Link>
            </div>
          ) : (
            <button onClick={handleLogout} className="px-4 py-2 font-medium text-[#8c3939] border-2 border-[#8c3939] rounded-lg">Log out</button>
          )}
          <div className="relative flex items-center">
            <CartIcon totalItems={cart.length} />
          </div>
        </div>
        <div className="md:hidden flex items-center space-x-2">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} isMobile />
          <div className="relative flex items-center">
            <CartIcon totalItems={cart.length} />
          </div>
          <button onClick={toggleMenu} className="focus:outline-none">
            <MenuIcon isOpen={isOpen} />
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="flex flex-col p-4 space-y-2">
            <DropdownMenu title="Theme Cakes" items={dropdownItems} />
            {navItems.map((item, index) =>
              item.dropdown ? (
                <DropdownMenu key={index} title={item.name} items={dessertsDropdownItems} />
              ) : (
                <NavItem item={item} key={index} />
              )
            )}
            {!localStorage.getItem('token') ? (
              <div className="flex flex-col space-y-2"> {/* Adjusted for better spacing */}
                <Link to="/login">
                  <button className="px-4 py-2 font-medium text-white bg-[#8c3939] rounded-lg">Log In</button>
                </Link>
                <Link to="/signin">
                  <button className="px-4 py-2 font-medium text-[#8c3939] border-2 border-[#8c3939] rounded-lg">Sign Up</button>
                </Link>
              </div>
            ) : (
              <button onClick={handleLogout} className="px-4 py-2 font-medium text-[#8c3939] border-2 border-[#8c3939] rounded-lg">Log out</button>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const DropdownMenu = ({ title, items }) => (
  <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="flex items-center text-lg font-medium text-gray-700 hover:text-[#8c3939]">
        {title}
        <ChevronDownIcon className="w-5 h-5 ml-1" aria-hidden="true" />
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute left-0 w-72 mt-2 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-auto max-h-64 scrollbar-thin scrollbar-thumb-[#8c3939] z-10">
        <div className="p-2 grid grid-cols-3 gap-2">
          {items.map((item, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <a
                  href={item.href}
                  className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                >
                  {item.name}
                </a>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
);

const NavItem = ({ item }) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={item.href}
    className="relative text-lg font-bold text-gray-700 hover:text-[#8c3939]"
  >
    {item.name}
  </motion.a>
);

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch, isMobile }) => {
  // Handle enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`relative flex items-center ${isMobile ? 'w-50' : ''} bg-[#f5f5f5] p-2 rounded-lg`}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown} // Added event handler for Enter key
        className="px-3 py-2 border-2 border-[#8c3939] rounded-l-lg focus:outline-none w-full"
        placeholder="Find Your Treat..."
      />
      <button 
        onClick={handleSearch}
        className="flex items-center justify-center px-3 py-3 text-white bg-[#8c3939] rounded-r-lg"
      >
        <MagnifyingGlassIcon className="w-5 h-5" />
      </button>
    </div>
  );
};


const CartIcon = ({ totalItems }) => (
  <div className="relative">
    <Link to="/cart">
      <ShoppingCartIcon className="w-6 h-6 text-[#8c3939]" />
    </Link>
      <div className="circle bg-red-500 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full text-white text-xs">
        {totalItems ?? 0}
      </div>
   
  </div>
);

const MenuIcon = ({ isOpen }) => (
  <svg
    className="w-8 h-8 text-[#8c3939]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {isOpen ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    )}
  </svg>
);

export default Navbar;
