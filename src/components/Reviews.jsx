import React, { useEffect, useState, useRef } from 'react'
import ReviewsPannel from './ReviewsPannel'
import axios from 'axios'


//create aNIMATION of changing comments 
//gray rect fades in and after fade out coments are new 

export default function Reviews() {
    const [reviews, setReviews] = useState([])
    const sliderRef = useRef(null);
    const scrollAmount = 600;
    useEffect(() => {
        axios.get('/src/reviews.json').then(
            data => setReviews(data.data.vpn_reviews)
        )
    }, [])

    const displayRevies = reviews.map(e => (<ReviewsPannel name={e.name} location={e.location} comment={e.comment} score={e.score}/>))


  return (
    <div className='hidden md:flex flex-col items-center px-20 p-4'>
        <div className='p-4 text-center'>
            <h1 className='text-4xl font-bold mt-4 leading-loose text-gray-800'>Trusted by Thousands of <br /> Happy Customer</h1>
            <p className='mt-2 text-gray-600'>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
        </div>
        
       <div className='flex flex-col lg:flex-row justify-evenly items-center gap-6'>
            <div className='w-12 h-12 bg-red-400 rounded-full hidden lg:flex justify-center items-center text-white text-2xl' 
            onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft -= scrollAmount; 
            }}
            >{'<'}</div>
              <div className=' lg:w-[1280px] hidden md:flex gap-6 overflow-hidden scroll-smooth  flex-shrink-0 p-4' ref={sliderRef}>
                {displayRevies}
              </div>
            <div className='w-12 h-12 bg-red-400 rounded-full hidden lg:flex justify-center items-center text-white text-2xl'
            onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft += scrollAmount; 
            }}
            >{'>'}</div>
       </div>
    </div>
  )
}
