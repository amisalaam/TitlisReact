import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TripBanner from '../components/Tripdetails/TripBanner';

function PackageDetails() {
    return (
        <div className=' dark:bg-gray-900 dark:text-white' >
            <Navbar />
            <TripBanner />
            <Footer />
        </div>

    )
}

export default PackageDetails