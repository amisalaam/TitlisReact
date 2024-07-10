import React from 'react';

function Feed() {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <div className='flex justify-center items-center'>
        {/* HEADER */}
        <div className='grid grid-cols-2 md:grid-cols-4 lg:mt-20 mt-12'>
          {/* Horizontal line on the left */}
          <div className='col-span-1 hidden md:flex items-center'>
            <div className='h-[1px] bg-black w-full'></div>
          </div>

          {/* Post button */}
          <div className='text-center md:text-end border border-black rounded-l-lg p-2 flex justify-center'>
            <span className='bg-red-500 px-5 rounded-lg text-white font-bold'>Post</span>
          </div>

          {/* Travel News button */}
          <div className='text-center md:text-start border border-black rounded-r-lg'>
            <span className='rounded-lg font-bold flex justify-center p-2'>Travel News</span>
          </div>

          {/* Horizontal line on the right */}
          <div className='col-span-1 hidden md:flex items-center'>
            <div className='h-[1px] bg-black w-full md:w-[13rem]'></div>
          </div>
        </div>
      </div>

      {/* BODY */}
      {/* Add your responsive content here */}
    </div>
  );
}

export default Feed;
