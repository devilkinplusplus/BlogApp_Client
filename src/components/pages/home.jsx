import React from 'react'
import BlogList from './blog/blogList'
import Sidebar from '../layout/sidebar'

function Home() {
  return (
    <div className='flex flex-1'>
        <BlogList />
        <Sidebar />
    </div>
  )
}

export default Home