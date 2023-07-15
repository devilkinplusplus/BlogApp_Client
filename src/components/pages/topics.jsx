import React from 'react'

function Topics( { topic }) {
  return (
    <div className='bg-slate-200 rounded-lg py-2 px-10 text-gray-700 cursor-pointer'>
        { topic }
    </div>
  )
}

export default Topics