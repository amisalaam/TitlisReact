import React from 'react';
import BannerMain from '../../assets/Home/BannerMain.png';
import BannerPlane from '../../assets/Home/BannerPlane.png';
import { PiStarFourFill } from 'react-icons/pi';

function Banner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 mx-auto w-full max-w-screen-xl space-y-4 md:space-y-0 mt-16 md:mt-0 dark:border-gray-600">
      <div className="flex flex-col justify-center p-4 md:p-8">
        <h1 className="text-left text-5xl md:ml-8 font-bold text-black dark:text-white">
          Explore <br />
          <div className='flex items-center my-2'>
            Beautiful <PiStarFourFill className="md:mx-6" />
          </div>
          <span className="m">World !</span>
        </h1>
      </div>
      <div className="relative overflow-hidden hidden lg:block">
        <img src={BannerPlane} alt="Plane" className="w-full md:w-[18rem] h-[15rem] mt-4 md:mt-10 mr-20 object-cover" />
      </div>
      
      <div className="overflow-hidden">
        <img src={BannerMain} alt="BannerImage" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

export default Banner;
