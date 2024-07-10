import React from 'react';
import gallery1 from '../../assets/Home/gallery1.jpg';
import gallery2 from '../../assets/Home/gallery2.jpg';
import gallery3 from '../../assets/Home/gallery3.jpg';
import gallery4 from '../../assets/Home/gallery4.jpg';
import gallery5 from '../../assets/Home/gallery5.jpg';
import gallery6 from '../../assets/Home/gallery6.jpg';


function OurGallery() {
    return (
        <div className='mx-auto max-w-screen-xl mb-10'>
            <div className='grid grid-cols-2 md:my-8 mx-3'>
                <div className=''>
                    <h2 className='text-2xl md:text-3xl item items-center'> Our Gallery <span className='hidden md:inline-block text-base font-light'>-Share your happy moments</span></h2>
                </div>
                <div className=''>
                    <ul className='flex justify-end items-center'>
                        <li className=' text-lg text-titlisRed'>
                            view all
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex '>
                <div className='md:w-1/3 w-1/2 '>
                    <div className=' items-center place-items-center w-auto mx-auto p-5'>
                        <div className=' md:h-[26rem] overflow-hidden rounded-2xl '>
                            <img className='object-cover h-full w-full' src={gallery1} alt="" />
                        </div>
                    </div>
                    <div className=' overflow-hidden w-auto mx-auto p-5 '>
                        <div className=' md:h-[16rem] overflow-hidden  rounded-2xl'>
                            <img className='object-cover h-full w-full' src={gallery4} alt="" />
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 w-1/2 '>
                    <div className=' items-center place-items-center w-auto mx-auto p-5'>
                        <div className=' md:h-[16rem] overflow-hidden  rounded-2xl'>
                            <img className='object-cover h-full w-full' src={gallery3} alt="" />
                        </div>
                    </div>
                    <div className=' items-center place-items-center w-auto mx-auto p-5'>
                        <div className=' md:h-[26rem] overflow-hidden rounded-2xl '>
                            <img className='object-cover h-full w-full' src={gallery1} alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-1/3 hidden md:block '>
                    <div className=' items-center place-items-center w-auto mx-auto p-5'>
                        <div className=' md:h-[26rem] overflow-hidden rounded-2xl'>
                            <img className='object-cover h-full w-full' src={gallery2} alt="" />
                        </div>
                    </div>
                    <div className=' items-center place-items-center w-auto mx-auto p-5'>
                        <div className=' md:h-[16rem] overflow-hidden  rounded-2xl'>
                            <img className='object-cover h-full w-full' src={gallery3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurGallery;
