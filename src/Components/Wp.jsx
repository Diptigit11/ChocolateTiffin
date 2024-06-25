import React from 'react';

function Wp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/+918010126446"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-lg cursor-pointer outline-none border-none group"
        style={{
          background: 'linear-gradient(90deg, rgb(18, 198, 101) 0.85%, rgb(0, 148, 70) 100%)',
        }}
      >
        <img
          src="https://interaktdevweb.z1.web.core.windows.net/assets/svg/whatsapp-icon.svg"
          alt="WhatsApp"
          className="w-full h-full"
        />
        <span className="absolute bottom-16 right-0 mb-3 mx-6 px-4 py-1 text-white bg-green-500 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          Start to chat
        </span>
      </a>
    </div>
  );
}

export default Wp;
