import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/News_Blogs/Banner'
import Feed from '../components/News_Blogs/Feed'
import Card from '../components/News_Blogs/Card'
import Coustomer_reviews from '../components/News_Blogs/Coustomer_reviews'

function News_Blogs() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Feed/>
      <Card/>
      <Coustomer_reviews/>
      <Footer/>
      </div>
  )
}

export default News_Blogs