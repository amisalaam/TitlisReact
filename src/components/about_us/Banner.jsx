import React from 'react';
import image from '../../assets/About_us/banner.jpg';

function Banner() {
  const bannerStyle = {
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px', 
  };

  return (
    <div className='mx-auto w-full max-w-screen-xl mt-10 opacity-90'>
         <div className="absolute left-0 w-full p-4 bg-red-300 text-yellow-900 text-center font-bold text-lg dark:bg-red-600 dark:text-yellow-100">
          This page is under development
        </div>
      <div className='flex rounded-xl justify-center items-center' style={bannerStyle}>
        <h1 className='text-center text-white text-5xl font-bold'>About Us</h1>
      </div>
    </div>
  );
}

export default Banner;