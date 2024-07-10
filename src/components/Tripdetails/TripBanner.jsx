import React, { useState } from 'react'
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { GrGallery } from "react-icons/gr";
import { LiaComment } from "react-icons/lia";
import TripInfo from './TripInfo';
import TourPlan from './TourPlan';
import GalleryComponent from './GalleryComponent';
import Reviews from './Reviews';

function TripBanner() {
    const [activeButton, setActiveButton] = useState('information');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
      };
    return (
        <div className='mx-auto max-w-screen-xl '>
            <div className='mt-[5rem] md:mt-[6rem] dark:bg-gray-900 mx-8'>
                <div className="card bg-gray-100 bg-base-100 shadow-xl">
                    <figure className="relative">
                        <img
                            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698796800&semt=sph"
                            className="w-screen h-auto max-h-96"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 py-2">
                            Your Text
                        </div>
                    </figure>
                    <div className="card-actions flex justify-center mt-0">
                        <button
                            type="button"
                            className={`text-gray-900 bg-white border border-gray-200 font-medium text-sm px-5 md:py-9 text-center inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mb-2 mx-0 md:w-40 ${activeButton === 'information' ? 'bg-titlisRed text-white' : ''
                                }`}
                            onClick={() => handleButtonClick('information')}
                        >
                            <MdOutlineScreenSearchDesktop />
                            Information
                        </button>
                        <button
                            type="button"
                            className={`text-gray-900 bg-white border border-gray-200 font-medium text-sm px-5 md:py-9 text-center inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mb-2 mx-0 md:w-40 ${activeButton === 'tour-plan' ? 'bg-red-700 text-white' : ''
                                }`}
                            onClick={() => handleButtonClick('tour-plan')}
                        >
                            <SlCalender />
                            Tour Plan
                        </button>
                        <button
                            type="button"
                            className={`text-gray-900 bg-white border border-gray-200 font-medium text-sm px-5 md:py-9 text-center inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mb-2 mx-0 md:w-40 ${activeButton === 'gallery' ? 'bg-red-700 text-white' : ''
                                }`}
                            onClick={() => handleButtonClick('gallery')}
                        >
                            <GrGallery />
                            Gallery
                        </button>
                        <button
                            type="button"
                            className={`text-gray-900 bg-white border border-gray-200 font-medium text-sm px-5 md:py-9 text-center inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mb-2 mx-0 md:w-40 ${activeButton === 'reviews' ? 'bg-red-700 text-white' : ''
                                }`}
                            onClick={() => handleButtonClick('reviews')}
                        >
                            <LiaComment />
                            Reviews
                        </button>
                    </div>
                </div>


            </div>
            <div >
            {activeButton === 'information' && <TripInfo />}
            {activeButton === 'tour-plan' && <TourPlan />}
            {activeButton === 'gallery' && <GalleryComponent />}
            {activeButton === 'reviews' && <Reviews />}
            </div>
        </div>
    )
}

export default TripBanner