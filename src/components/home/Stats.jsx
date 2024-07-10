import React from 'react'

function Stats() {
    return (
        <div className='mx-auto w-full max-w-screen-xl  '>
            <div className='grid md:grid-cols-4 grid-cols-2  place-items-center mt-20 '>

                <div className='h-[8rem] bg-gray-200  p-10 rounded-xl w-[10rem] text-center m-5 '>
                    <p className='text-titlisRed font-bold'> 24+</p>
                    <p className='font-semibold'> Cities</p>
                </div>
                <div className='h-[8rem] bg-gray-200  p-10 rounded-xl w-[10rem] text-center'>
                    <p className='text-titlisRed font-bold'> 700+</p>
                    <p className='font-semibold'> Places</p>
                </div>

                <div className='h-[8rem] bg-gray-200  p-10 rounded-xl w-[10rem] text-center'>
                    <p className='text-titlisRed font-bold'> 200+</p>
                    <p className='font-semibold'> Hotel</p>
                </div>
                <div className='h-[8rem] bg-gray-200  p-10 rounded-xl w-[10rem] text-center'>
                    <p className='text-titlisRed font-bold'> 2k+</p>
                    <p className='font-semibold'> Reviwes</p>
                </div>

            </div>
        </div>
    )
}

export default Stats