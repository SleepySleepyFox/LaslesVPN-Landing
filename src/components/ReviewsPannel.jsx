import React, { useState } from 'react'

export default function ReviewsPannel({img, location, name, comment, score}) {

  const stars = score.map(e => (
    <img src='/public/images/ant-design-star-filled.svg' alt=''></img>
  ))

  return (
      <div className='flex justify-between flex-col items-center w-[400px] h-[230px] border-gray-100 p-2 border-2 rounded-lg hover:border-red-400 ease-out duration-300 flex-shrink-0 text-center'>
        
          <h1 className='text-lg font-bold text-gray-600'>{name}</h1>
          <p className='text-gray-400'>{location}</p>
        <p className='text-gray-700 text-ellipsis'>{comment}</p>
        
        <div className='flex mt-auto'>
          {stars}
        </div>
      </div>
  )
}
