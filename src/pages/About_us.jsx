import React from 'react'
import Banner from '../components/about_us/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Description from '../components/about_us/Description'
import Founder from '../components/about_us/Founder'
import Statistics from '../components/about_us/Statistics'
import Why from '../components/about_us/Why'

function about_us() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Description/>
      <Founder/>
      <Statistics/>
      <Why/>
      <Footer/>
    </div>
  )
}

export default about_us