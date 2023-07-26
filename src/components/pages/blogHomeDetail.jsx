import React from 'react'
import Recommendeds from './recommendeds'

function BlogHomeDetail() {
  return (
    <>
        <div className="flex justify-start items-start p-4 space-x-4 bg-gray-100 py-5">
        <div className="bg-slate-100 flex flex-col space-y-4 p-5 h-auto justify-between items-start w-2/5">
            <img
            src="https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I"
            alt="pp"
            className="object-cover w-auto h-60 rounded-md"
            />
            <h2 className="font-semibold text-2xl px-1.5 text-gray-700">
            <i className="fas fa-user mr-0.5"></i> John Doe
            </h2>
        </div>
        <div className="flex flex-col space-y-4 justify-between items-start font-gemunu w-3/5">
            <h3 className="text-2xl font-semibold text-gray-700 uppercase">
            Lorem Title
            </h3>
            <span className="flex-grow flex-wrap text-sm text-gray-400 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus
            dignissimos dicta vero illum perferendis sit, eligendi quam in placeat
            ea ratione assumenda quidem blanditiis explicabo enim expedita? Minus
            quaerat qui laborum, laboriosam voluptatibus dolores repellat dolorem,
            temporibus atque, commodi amet suscipit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus
            dignissimos dicta vero illum perferendis sit, eligendi quam in placeat
            ea ratione assumenda quidem blanditiis explicabo enim expedita? Minus
            quaerat qui laborum, laboriosam voluptatibus dolores repellat dolorem,
            temporibus atque, commodi amet suscipit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque minus
            dignissimos dicta vero illum perferendis sit, eligendi quam in placeat
            ea ratione assumenda quidem blanditiis explicabo enim expedita? Minus
            quaerat qui laborum, laboriosam voluptatibus dolores repellat dolorem,
            temporibus atque, commodi amet suscipit.
            </span>
            <span className="text-gray-500">{new Date().toLocaleDateString('en-GB')}</span>
        </div>
        </div>
        <Recommendeds />
    </>
  )
}

export default BlogHomeDetail