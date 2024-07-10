import React, { useState } from 'react';
import review from '../../assets/News&Blogs/review.jpg';

function Coustomer_reviews() {
  const [showMore, setShowMore] = useState(false);
  const reviewText =
    "This is a long review text. It can be quite extensive, and we want to display only a portion of it initially. If you want to read more, you can click the 'Show More' link.";

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <div className="mt-10 md:mt-20">
        <h2 className="text-4xl font">Customer Reviews</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div className="flex flex-col md:flex-row text-base m-4">
          <div className=" md:w-1/3 flex justify-center mb-4 md:mb-0">
            <img className="rounded-[10rem] md:rounded-[1rem]  md:w-[10rem] h-[10rem]" src={review} alt="" />
          </div>
          <div className="w-full  md:w-2/3 text-base">
            <p className="md:mb-4">
              {showMore ? reviewText : reviewText.slice(0, 126)}...
              {reviewText.length > 120 && (
                <button
                  className="text-red-500 cursor-pointer ml-2"
                  onClick={toggleShowMore}
                >
                  {showMore ? 'Show Less' : 'Show More'}
                </button>
              )}
            </p>
            <p className="font-semibold text-lg md:mb-2">Reviewer Name</p>
            <p className="text-lg">UAE</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row text-base m-4">
          <div className=" md:w-1/3 flex justify-center mb-4 md:mb-0">
            <img className="rounded-[10rem] md:rounded-[1rem]  md:w-[10rem] h-[10rem]" src={review} alt="" />
          </div>
          <div className="w-full  md:w-2/3 text-base">
            <p className="md:mb-4">
              {showMore ? reviewText : reviewText.slice(0, 126)}...
              {reviewText.length > 120 && (
                <button
                  className="text-red-500 cursor-pointer ml-2"
                  onClick={toggleShowMore}
                >
                  {showMore ? 'Show Less' : 'Show More'}
                </button>
              )}
            </p>
            <p className="font-semibold text-lg md:mb-2">Reviewer Name</p>
            <p className="text-lg">UAE</p>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Coustomer_reviews;
