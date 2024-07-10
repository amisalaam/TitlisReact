import React from 'react';

function OfferCard({ image, name, offerPercentage,description,onClick }) {
    return (
        <div className="relative group " onClick={onClick}>
            <div
                className="bg-cover rounded-[1rem] md:rounded-[2rem] bg-no-repeat h-[14rem] p-4 md:h-[22rem] md:p-8 "
                style={{ backgroundImage: `url(${image})` }}
            >
                {offerPercentage && offerPercentage !== '0' && ( // Check if offerPercentage is not null or '0'
                    <span className="bg-titlisRed text-white md:px-4 md:py-2 text-sm md:text-lg px-3 py-2 rounded-full font-semibold absolute top-5 right-5">
                        {offerPercentage}
                    </span>
                )}
            </div>
            <div className="text-center mt-4">
                <h3 className="md:text-xl text-lg">{name}</h3>
                <p className="md:text-base text-base">{description}</p>
            </div>
        </div>
    );
}

export default OfferCard;
