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
                        Our dedicated team collaborates seamlessly to deliver exceptional travel experiences. Together, we innovate, support each other, and strive for excellence, ensuring every client's journey is unforgettable and beyond expectations
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
                        Our vision is to inspire and facilitate extraordinary journeys that enrich lives, foster cultural exchange, and create lasting memories. We strive to be the premier choice for immersive, personalized travel experiences worldwide.
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
                        Our mission is to provide exceptional travel experiences through meticulous planning, personalized service, and a commitment to sustainable tourism. We aim to make every journey unforgettable, ensuring comfort, safety, and satisfaction for our clients.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Description