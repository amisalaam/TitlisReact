import React from 'react'
import BannerImg2 from '../../assets/Home/banner2.png'
import { FiWifi } from "react-icons/fi";
import { PiAirplaneTakeoffFill, PiCoffee } from "react-icons/pi";
import { BiWorld } from "react-icons/bi";
import { ImHome } from "react-icons/im";



function Banner2() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-xl mx-auto mt-10'>
            <div className='lg:p-4 md:p-0 p-4 flex items-center justify-center '>
                <img src={BannerImg2} alt="Banner Image" />
            </div>
            <div className='p-6'>
                <div className='lg:mt-10 md:mt-5'>
                    <h1 className='text-[9mm] lg:text-[13mm] md:text-[9mm] font-semibold'>Explore all corners of the world with us </h1>
                </div>

                <div className='md:mt-3 mt-5 lg:mt-5'>
                    <p className='lg:text-xl text-lg '>Travel is fatal to prejudice, and narrow mindedness,
                        And many of our people need  it sorely on these accounts.
                        And many of our people need it sorely.</p>
                </div>

                <div className=' grid grid-cols-2  md:grid-cols-2'>
                    <div className=' flex justify-start items-center  md:my-5 my-6 lg:my-6' >
                        <span className='lg:text-3xl text-2xl  bg-gray-100 p-2 rounded-lg dark:text-black '><BiWorld /></span> <span className='mx-5 lg:text-[6mm] text-xl'>Flight</span>
                    </div>

                    <div className=' flex justify-start items-center ' >
                        <span className='lg:text-3xl text-2xl bg-gray-100 p-2 rounded-lg dark:text-black'><ImHome /></span>  <span className='mx-5 text-xl lg:text-[6mm]'>Hotel</span>
                    </div>

                    <div className=' flex justify-start items-center ' >
                        <span className='lg:text-3xl text-2xl  bg-gray-100 p-2 rounded-lg dark:text-black'><FiWifi /></span>  <span className='mx-5 text-xl lg:text-[6mm]'>Wifi</span>
                    </div>

                    <div className='flex justify-start items-center' >
                        <span className='lg:text-3xl text-2xl bg-gray-100 p-2 rounded-lg dark:text-black'><PiCoffee /></span> <span className='mx-5 text-xl lg:text-[6mm]'>Food</span>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Banner2