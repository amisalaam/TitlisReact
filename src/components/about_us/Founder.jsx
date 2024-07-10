import React from 'react'
import founderImage from '../../assets/About_us/founder.jpg'
import { FaQuoteLeft } from "react-icons/fa";

function Founder() {
  return (
    
    <div className='mx-auto max-w-screen-xl mt-10'>
      <div className='grid md:grid-cols-2  ' >
        <div className='flex justify-center'>
          <img className='w-[32rem] rounded-3xl ' src={founderImage} alt="" />
        </div>
        <div className=''>
          <h3 className='text-5xl text-titlisRed'>
            <FaQuoteLeft />
          </h3>
          <p className='mt-10 text-2xl mr-12 text-gray-500 '>
            To my mind, the greatest reward and luxury of travel is to be able to experience everyday things as if for the first time, to be in a position in which almost nothing is so familiar it is taken for granted.
          </p>
          <h2 className='font-bold text-3xl mt-6'>Shihab A.K</h2>
          <p className='text-gray-500'>Founder Titlis Tours</p>
        </div>
      </div>
    </div>
  )
}

export default Founder