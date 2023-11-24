import React from 'react'

export default function About() {
  return (
    <div className='flex justify-evenly px-20 items-center p-8'>
        <div className='hidden lg:block'>
            <img src="/images/illustration-2.svg" alt="" />
        </div>

        <div className='text-center lg:text-left'>
            <h1 className='text-4xl font-bold leading-relaxed'>We Provide Many <br /> Features You Can Use</h1>
            <p className='mt-4  leading-relaxed text-gray-600'>You can explore the features that we provide with fun <br /> and have their own functions each feature.</p>
            <div className='hidden lg:flex flex-col gap-4 mt-4 text-gray-600'>
                <div className='flex gap-2 text-lg'>
                    <img src="/images/bx-bxs-check-circle.svg" alt="" />
                    <p>Powerfull online protection.</p>
                </div>
                <div className='flex gap-2 text-lg'>
                    <img src="/images/bx-bxs-check-circle.svg" alt="" />
                    <p>Internet without borders.</p>
                </div>
                <div className='flex gap-2 text-lg'>
                    <img src="/images/bx-bxs-check-circle.svg" alt="" />
                    <p>Supercharged VPN</p>
                </div>
                <div className='flex gap-2 text-lg'>
                    <img src="/images/bx-bxs-check-circle.svg" alt="" />
                    <p>No specific time limits.</p>
                </div>
            </div>
            <div className='flex justify-evenly lg:hidden gap-2 w-screen px-2'>
                    <div className='bg-gray-100 rounded-md flex flex-col w-44 h-44 px-4 pt-7 pb-7 justify-between'>
                        <p className=''>Powerfull online protection.</p>
                        <img className='h-12 flex-grow-0 place-items-end' src="/images/bx-bxs-check-circle.svg" alt="" />
                    </div>  
                    <div className='bg-gray-100 rounded-md flex flex-col w-44 h-44 px-4 pt-7 pb-7 justify-between'>
                        <p>Internet without borders.</p>
                        <img className='h-12 flex-grow-0 place-items-end' src="/images/bx-bxs-check-circle.svg" alt="" />
                    </div> 
                    <div className='bg-gray-100 rounded-md flex flex-col w-44 h-44 px-4 pt-7 pb-7 justify-between'>
                        <p>Supercharged VPN</p>
                        <img className='h-12 flex-grow-0 place-items-end' src="/images/bx-bxs-check-circle.svg" alt="" />
                    </div> 
                    <div className='bg-gray-100 rounded-md flex flex-col w-44 h-44 px-4 pt-7 pb-7 justify-between'>
                        <p>No specific time limits.</p>
                        <img className='h-12 flex-grow-0 place-items-end' src="/images/bx-bxs-check-circle.svg" alt="" />
                    </div> 
                    
                </div>
        </div>
    </div>
  )
}
