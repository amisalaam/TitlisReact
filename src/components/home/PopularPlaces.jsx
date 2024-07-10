import React, { useState } from 'react'
import Card from '../Card';

import Offer1 from '../../assets/Home/beachResort.jpg';

import Offer2 from '../../assets/Home/offer2.jpg';
import Offer3 from '../../assets/Home/offer3.jpg';
import Offer4 from '../../assets/Home/offer4.jpg';


function PopularPlaces() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const offerData = [
        {
            image: Offer1,
            name: 'Beautiful Beach Resort',
        },
        {
            image: Offer2,
            name: 'Honymoon Packages',

        }, {
            image: Offer3,
            name: 'Adventure Packages ',

        }
    ];
    return (
        <div className='mx-auto max-w-screen-xl my-20 '>

            <div className='grid grid-cols-2 md:my-10 my-5 mx-2'>
                <div className=''>
                    <h2 className='md:text-3xl text-2xl item items-center'> Popular Places</h2>
                </div>
                <div className=''>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className='block md:hidden ml-auto text-lg text-titlisRed'
                    >
                        View all
                    </button>
                    <ul
                        className={`${isDropdownOpen ? 'block' : 'hidden'
                            } md:flex md:justify-end  list-none md:space-x-4  top-full left-0 w-full  p-4`}
                    >
                        <li className='mx-4 text-lg'>Asia</li>
                        <li className='mx-4 text-lg'>Middle East</li>
                        <li className='mx-4 text-lg'>Africa</li>
                        <li className='mx-4 text-lg'>Europe</li>
                        <li className='mx-4 md:block hidden text-lg text-titlisRed'>View All</li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8  mx-4">
                {offerData.map((offer, index) => (
                    <Card
                        key={index}
                        image={offer.image}
                        name={offer.name}
                        offerPercentage={offer.offerPercentage}
                    />
                ))}
            </div>


        </div>
    )
}

export default PopularPlaces