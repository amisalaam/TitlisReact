import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/home/Banner'
import OurOffers from '../components/home/OurOffers'
import Banner2 from '../components/home/Banner2'
import BestValueTrip from '../components/home/BestValueTrip'
import Stats from '../components/home/Stats'
import PopularPlaces from '../components/home/PopularPlaces'
import OurGallery from '../components/home/OurGalllery'
import NewsLetter from '../components/home/NewsLetter'
import Dropdwon from '../components/Dropdown'

function Home() {
  return (
    <div className=' dark:bg-gray-900 dark:text-white' >
      <Navbar />
      <Banner />
      <OurOffers/>
      <Banner2/>
      <BestValueTrip/>
      <Stats/>
      <PopularPlaces/>
      <OurGallery/>
      <NewsLetter/>
      <Footer />
      <Dropdwon/>
    </div>

  )
}

export default Home