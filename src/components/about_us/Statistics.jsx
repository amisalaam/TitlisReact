import React from 'react';
import yourImage from '../../assets/About_us/stati.jpg';

const Statistics = () => {
  return (
    <div className='mx-auto max-w-screen-xl md:mt-20 mt-10'>
      <div className='bg-cover md:rounded-2xl bg-center md:h-40 opacity-70' style={{ backgroundImage: `url(${yourImage})` }}>
        <div className='grid md:grid-cols-4 grid-cols-2 h-full px-4 md:px-8 lg:px-16 xl:px-20'>
          <div className='flex items-center justify-center mb-4 md:mb-0'>
            <div className='text-center text-white'>
              <h3 className='text-4xl md:text-5xl lg:text-6xl font-extrabold my-1'>1211</h3>
              <p className='text-base md:text-lg lg:text-base'>Happy Customers</p>
            </div>
          </div>

          <div className='flex items-center justify-center mb-4 md:mb-0'>
            <div className='text-center text-white'>
              <h3 className='text-4xl md:text-5xl lg:text-6xl font-extrabold my-1'>354</h3>
              <p className='text-base md:text-lg lg:text-base'>Tours</p>
            </div>
          </div>

          <div className='flex items-center justify-center mb-4 md:mb-0'>
            <div className='text-center text-white'>
              <h3 className='text-4xl md:text-5xl lg:text-6xl font-extrabold my-1'>131</h3>
              <p className='text-base md:text-lg lg:text-base'>Cities</p>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='text-center text-white'>
              <h3 className='text-4xl md:text-5xl lg:text-6xl font-extrabold my-1'>1</h3>
              <p className='text-base md:text-lg lg:text-base'>Branch Office</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
