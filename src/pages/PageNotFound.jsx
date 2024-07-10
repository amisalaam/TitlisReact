import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
    <div className="text-center">
      <h1 className="text-9xl font-bold text-titlisRed mb-4">404</h1>
      <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8">
        Oops! The page you're looking for isn't here.
      </p>
      <Link
        to="/"
        className="inline-block px-2 py-2 text-lg  text-white bg-titlisRed rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-titlisRed focus:ring-opacity-50 dark:focus:ring-red-800"
      >
        Go Back Home
      </Link>
    </div>
  </div>
  )
}

export default PageNotFound