import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ListPackages from '../components/Packages/ListPackages'
import PackageBanner from '../components/Packages/PackageBanner'

function AllPackages() {
  return (
    <div>
      <Navbar />
      <PackageBanner />
      <ListPackages/>
      <Footer />
    </div>

  )
}

export default AllPackages