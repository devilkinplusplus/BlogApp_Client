import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-500 py-4">
    <div className="container mx-auto">
      <p className="text-white text-center">
        &copy; {new Date().getFullYear()} Ilkin Rufullayev. All rights reserved.
      </p>
    </div>
  </footer>
  )
}

export default Footer