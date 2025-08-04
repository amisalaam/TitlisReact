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
                    <p className='text-[12px] text-gray-600'>Our experienced and knowledgeable tour guides make every journey memorable with their local expertise, friendly approach, and passion for sharing the best hidden gems and cultural insights of each destination.</p>
                </div>

                <div className='text-center mx-6'>
                    <h1 className='text-[5rem]  flex justify-center '><BsFilePerson /></h1>
                    <h6 className='font-bold my-4'>Full Facility</h6>
                    <p className='text-[12px] text-gray-600'>We provide comprehensive travel services including accommodation, transportation, meals, activity bookings, and 24/7 customer support to ensure you have everything you need for a perfect vacation experience.</p>
                </div>
                
                <div className='text-center mx-6'>
                    <h1 className='text-[5rem]  flex justify-center '><BsFilePerson /></h1>
                    <h6 className='font-bold my-4'>Fast Booking</h6>
                    <p className='text-[12px] text-gray-600'>Our streamlined online booking system allows you to reserve your dream vacation in just a few clicks. Get instant confirmation and secure your travel dates without any hassle or lengthy procedures.</p>
                </div>
                
                <div className='text-center mx-6'>
                    <h1 className='text-[5rem] flex justify-center '><BsFilePerson /></h1>
                    <h6 className='font-bold my-4'>Worldwide Support</h6>
                    <p className='text-[12px] text-gray-600'>No matter where your adventures take you, our global support network is available around the clock to assist you with any travel concerns, emergency situations, or last-minute changes to your itinerary.</p>
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