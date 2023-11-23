import React from 'react'

export default function Hero() {
  return (
    <div className='px-20'>
        <div className='flex flex-col lg:flex-row lg:justify-evenly justify-between gap-5'>
            <div className='flex flex-col text-center items-center lg:self-center lg:block lg:text-left'>
                <h1 className='text-5xl leading-relaxed'>Want anything to be <br /> easy with <span className='font-extrabold'>LaslesVPN</span>.</h1>
                <p className='lg:mt-8 mt-4 font-8 leading-relaxed'>Provide a network for all your needs with ease and fun using <span className='font-extrabold'>LaslesVPN</span> <br />discover interesting features from us.</p>
                <button className='bg-red-500 lg:mt-20 mt-5 hover:shadow-2xl ease-out duration-200 hover:shadow-red-200 h-[60px] w-[250px] rounded-md text-white font-semibold'>Get Started</button>
            </div>
            <div className='self-center mt-3 lg:mt-0 lg:block'>
                <img src="/images/illustration-1.svg" alt="" />
            </div>
        </div>

        <div className='flex justify-evenly items-center h-[200px] shadow-md rounded-md mt-20'>
            <div className='flex gap-3'>
                <div className='w-fit p-2 bg-red-200 rounded-full aspect-square self-center'>
                    <img src="images/icon-heroicons-sm-user.svg" alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-extrabold'>90+</h1>
                    <p>Users</p>
                </div>
            </div>

            <div></div>

            <div className='flex gap-3'>
                <div className='w-fit p-2 bg-red-200 rounded-full aspect-square self-center'>
                    <img src="images/icon-heroicons-sm-user.svg" alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-extrabold'>30+</h1>
                    <p>Locations</p>
                </div>
            </div>

            <div></div>

            <div className='flex gap-3'>
                <div className='w-fit p-2 bg-red-200 rounded-full aspect-square self-center'>
                    <img src="images/icon-heroicons-sm-user.svg" alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-extrabold'>50+</h1>
                    <p>Servers</p>
                </div>
            </div>
        </div>
    </div>
  )
}
