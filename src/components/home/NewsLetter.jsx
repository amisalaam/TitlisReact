import React from 'react'


function NewsLetter() {
    return (
        <div className='mx-auto max-w-screen-xl '>
            <div className='flex justify-center'>
                <h1 className='text-2xl md:text-4xl font-semibold'>Sign up to our News Letter</h1>
            </div>
            <div className='flex justify-center md:my-10 my-6'>
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="  bg-gray-200 focus:outline-none rounded-l-2xl w-[15rem] md:w-[32rem] md:text-xl pl-4  "

                />
                <div className="bg-red-500 text-xl md:text-2xl text-white flex items-center px-6 md:px-14 md:py-5 py-3 rounded-r-2xl  justify-center">
                    <button >submit</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter