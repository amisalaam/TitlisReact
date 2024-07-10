import React from 'react'

function Description() {
    return (
        <div className='mx-auto w-full max-w-screen-xl mt-12 '>
            <div className='grid md:grid-cols-3 '>
                <div className='p-6 md:ml-10 ml-6 '>
                    <div className='md:text-4xl text-3xl mb-4'>
                        <h3>
                            <span className='inline-block border-b-4 border-red-500 pb-3'>GREAT </span>  TEAMWORK
                        </h3>
                    </div>
                    <div className='text-[16px] text-gray-600 font-thin '>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                    </div>
                </div>

                <div className='p-6 md:ml-10 ml-6  '>
                    <div className='md:text-4xl text-3xl  mb-4'>
                        <h3>
                            <span className='inline-block border-b-4 border-red-500 pb-3'>OUR </span>  VISION
                        </h3>
                    </div>
                    <div className='text-[16px] text-gray-600 font-thin '>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                    </div>
                </div>

                <div className='p-6 md:ml-10 ml-6  '>
                    <div className='md:text-4xl text-3xl mb-4'>
                        <h3>
                            <span className='inline-block border-b-4 border-red-500 pb-3'>OUR </span>  MISSION
                        </h3>
                    </div>
                    <div className='text-[16px] text-gray-600 font-thin '>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Description