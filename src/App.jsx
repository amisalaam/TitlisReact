import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Packages from './pages/AllPackages';
import News_Blogs from './pages/News_Blogs';
import PackageDetails from './pages/PackageDetails';
import About_us from './pages/About_us';
import PageNotFound from './pages/PageNotFound';
import PackagePlans from './pages/PackagePlans';
import Dropdwon from './components/Dropdown';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="*" element={<PageNotFound />} />


        <Route path="/" element={<Dropdwon/>} />
        <Route path="/all/packages" element={<Packages />} />
        <Route path="plans/details" element={<PackageDetails />} />
        <Route path='all/packages/plans/:packageId' element = {<PackagePlans />} />
        <Route path="/news" element={<News_Blogs />} />
        <Route path="/about" element={<About_us />} />
        {/* <Route path='/dropdown' elemenet={D} */}


      </Routes>
    </Router>
  )
}

export default App
