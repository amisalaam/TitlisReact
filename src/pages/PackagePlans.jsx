import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/PackagePlans/Banner'
import Plans from '../components/PackagePlans/Plans'

function PackagePlans() {
  return (
    <div>
        <Navbar/>

        <Banner/>
        <Plans/>

        <Footer/>
    </div>
  )
}

export default PackagePlans