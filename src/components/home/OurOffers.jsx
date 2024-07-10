import React from 'react';
import Card from '../Card';
import Offer1 from '../../assets/Home/beachResort.jpg';
import Offer2 from '../../assets/Home/offer2.jpg';
import Offer3 from '../../assets/Home/offer3.jpg';
import Offer4 from '../../assets/Home/offer4.jpg';



function OurOffers() {
    const offerData = [
        {
            image: Offer1,
            name: 'Beautiful Beach Resort',
            // offerPercentage: '40% Off',
        },
        {
            image: Offer2,
            name: 'Honymoon Packages',
            // offerPercentage: '0',
        }, {
            image: Offer3,
            name: 'Adventure Packages ',
            // offerPercentage: '30% Off',
        }, {
            image: Offer4,
            name: 'International Packages',
            // offerPercentage: '30% Off',
        },
    ];

    return (
        <div className="mx-auto w-full max-w-screen-xl">
            <div className="my-6 p-4">
                <h2 className="text-3xl">Our Offers</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8  mx-4">
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
    );
}

export default OurOffers;
