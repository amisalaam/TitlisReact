import React from 'react'

function TripInfo() {
  return (
    <>
      <div className='mx-auto max-w-screen-xl'>
        <div className="p-4 mx-7">
          <h2 className="text-2xl font-bold mb-4">All of Australia Itinerary</h2>
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-2/3 md:pr-4 mb-4 md:mb-0">
              <p>
                This is the information section. You can add your content here, such as details about the trip, location, and any other relevant information.
              </p>

              {/* Add more content here as needed */}
            </div>
            <div className="md:w-1/3">
              <ul className="list-disc ml-6 mt-3">
                <p>
                  This is the information section. You can add your content here, such as details about the trip, location, and any other relevant information.
                </p>
                <li>Information point 1</li>
                <li>Information point 2</li>
                <li>Information point 3</li>
              </ul>
              {/* Your content for the 1/3rd width div */}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default TripInfo