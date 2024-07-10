import React from 'react';
import { BsFilePerson } from "react-icons/bs";

const Why = () => {
    return (
        <div className='mx-auto max-w-screen-xl my-20'>
            <div className=''>
                <h1 className='text-4xl font-bold text-center text-titlisRed'>WHY CHOOSE US</h1>
                <h4 className='text-center font-semibold my-2'>
                    <span className='border-b-[3px] border-titlisRed pb-2 font-bold'>OUR SUPERIORITY</span>
                </h4>
            </div>

            <div className='grid md:grid-cols-4 grid-cols-2 md:px-20 my-20'>
                <div className='text-center mx-6'>
                    <h1 className='text-[5rem]  flex justify-center '><BsFilePerson /></h1>
                    <h6 className='font-bold my-4'>Friendly Tour Guide</h6>
                    <p className='text-[12px] text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>

                <div className='text-center mx-6'>

                    <h1 className='text-[5rem]  flex justify-center '><BsFilePerson /></h1>
                    <h6 className='font-bold my-4'>Full Facility</h6>
                    <p className='text-[12px] text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

                </div>
                <div className='text-center mx-6'>

                    <h1 className='text-[5rem]  flex justify-center '><BsFilePerson /></h1>
                    <h6 className='font-bold my-4'>Fast Booking</h6>
                    <p className='text-[12px] text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className='text-center mx-6'>

                    <h1 className='text-[5rem] flex justify-center '><BsFilePerson /></h1>
                    <h6 className='font-bold my-4'>Worldwide Support</h6>
                    <p className='text-[12px] text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

                </div>
            </div>
            <div className='grid md:grid-cols-2  '>
                <div className='md:text-end text-center'>
                    <h1 className='text-4xl font-semibold text-titlisRed'>LET'S JOIN WITH US</h1>
                    <p className='text-sm my-2'>
                    GET ALL THE INTERESTING TOURS INFORMATION 
                    </p>
                </div>
                <div className='text-center'>
                <button type="button" className=" hover:text-white border border-black hover:bg-black focus:outline-none font-medium rounded-l-full rounded-r-full  text-lg px-10 py-3 text-center  mb-2   dark:hover:text-white d">CONTACT US</button>
                </div>
            </div>
        </div>
    );
}

export default Why;
