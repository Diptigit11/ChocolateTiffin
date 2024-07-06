import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'; // Ensure this path is correct for your project structure

const cakes = [
  {
    image: 'https://bkmedia.bakingo.com/sq-chocolaty-creamy-round-cake-cake2160choc-A_0.jpg?tr=w-320,h-320,dpr-2,q-70',
    title: 'Regular Cakes',
  },
  {
    image: 'https://i0.wp.com/ovenfresh.in/wp-content/uploads/2023/02/Java-Chocolate-Caramel-And-Coconut-Torrone-Molle-Cake-1kg-1-.jpg?resize=768%2C768&ssl=1',
    title: 'Gourmet Cakes',
  },
  {
    image: 'https://assets.winni.in/product/primary/2022/9/74696.jpeg?dpr=1&w=500',
    title: 'Photo Cakes',
  },
  {
    image: 'https://shop.aubree.in/cdn/shop/products/WhatsAppImage2022-09-01at4.19.02PM_1024x1024.jpg?v=1662098773',
    title: 'Theme Cakes',
  }
];

const CakeSummary = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-9">
      <h2 className="text-2xl font-bold text-[#682a2a] text-center mb-10">
        Surprise Your Loved One With Special
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {cakes.map((cake, index) => (
          <motion.a
            key={index}
            className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            variants={fadeIn('up', index * 0.1)}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative group">
              <img
                className="w-full h-80 object-cover transition-transform duration-300 transform hover:scale-105"
                src={cake.image}
                alt={cake.title}
              />
              <div className="py-4 text-center">
                <h3 className="text-lg font-bold text-[#682a2a]">{cake.title}</h3>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default CakeSummary;
