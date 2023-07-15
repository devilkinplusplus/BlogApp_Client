import React from 'react'

function MiniBlog({blog}) {
  return (
         <div className='flex justify-start items-start space-x-3'>
            <img src={blog.image}
                alt="postimage" className='object-cover w-16 h-16 rounded-full cursor-pointer' />
            <div className='flex flex-col justify-between items-baseline hover:underline duration-100 cursor-pointer'>
                <h3 className='text-lg text-gray-700 font-semibold'>{blog.title}</h3>
                <span className='text-gray-400 text-xs'>{blog.description}</span>
            </div>
        </div>
  )
}

export default MiniBlog