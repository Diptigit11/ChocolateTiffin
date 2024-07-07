import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Features = () => {
  return (
    <div className='relative max-w-screen-lg mx-auto p-4'>
      <h2 className='text-3xl font-bold text-[#682a2a] mb-6 text-center'>What Our Customers Say</h2>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        interval={3000}
        stopOnHover
        className='relative'
      >
        <div className='relative w-full h-96'>
          <iframe
            src='https://widgets.sociablekit.com/google-reviews/iframe/25428338'
            frameBorder='0'
            width='100%'
            height='100%'
            title='Google Reviews Widget 1'
            allowFullScreen
            className='rounded-md shadow-lg'
          ></iframe>
        </div>
      </Carousel>
    </div>
  );
};

export default Features;
