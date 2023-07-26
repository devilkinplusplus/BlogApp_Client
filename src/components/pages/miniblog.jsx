import React from 'react'
import { useNavigate } from 'react-router-dom'
function MiniBlog({blog}) {
    const navigate = useNavigate();
  return (
         <div className='flex justify-start items-start space-x-3'>
            <img src={blog.image}
                alt="postimage" className='object-cover w-16 h-16 rounded-full cursor-pointer' />
            <div onClick={()=>navigate("/blog/4")} 
                 className='flex flex-col justify-between items-baseline hover:underline duration-100 cursor-pointer'>
                <h3 className='text-lg text-gray-700 font-semibold'>{blog.title}</h3>
                <span className='text-gray-400 text-xs'>{blog.description}</span>
            </div>
        </div>
  )
}

export default MiniBlog