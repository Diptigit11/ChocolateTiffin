import React, { useEffect, useState } from 'react';

const Loader = () => {
  const messages = [
    "The cake is calling my name!",
    "Sweetness loading, cake incoming!",
    "Counting down to cake time!",
    "My taste buds are ready for this cake!",
    "Cake anticipation level: maximum!",
    "Get ready for a slice of cake heaven!",
    "Can't resist the allure of cake!",
    "Brace yourself for a burst of sweetness!",
    "Cake excitement level: off the charts!",
    "The anticipation of cake is almost too much to handle!"
  ];

  const [message, setMessage] = useState('');

  useEffect(() => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-75 z-50">
      <img src="https://media.tenor.com/btmyl_V4L4gAAAAi/birthday-bday.gif" alt="Loading" className="w-24 h-24 mb-4" />
      <p className="text-center text-xl font-semibold">{message}</p>
    </div>
  );
};

export default Loader;
