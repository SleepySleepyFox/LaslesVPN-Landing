import React from 'react'

export default function Marketing() {
  return (
    <div className='flex flex-col items-center justify-center px-20 text-center'>
        <div className='p-4'>
            <h1 className='text-4xl font-bold mt-4 leading-loose text-gray-800'>Huge Global Network <br /> of Fast VPN</h1>
            <p className='mt-2 text-gray-600'>See <span className='font-bold'>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
        </div>

        <div className='pt-4'>
            <img src="/images/huge-global.svg" alt="" />
        </div>

        <div className='lg:flex lg:justify-evenly grid grid-cols-2 grid-rows-3 justify-center items-center w-[100%]'>
            <img className='justify-self-center' src="/images/mask-group.svg" alt="" />
            <img className='justify-self-center' src="/images/mask-group_2.svg" alt="" />
            <img className='justify-self-center' src="/images/mask-group_3.svg" alt="" />
            <img className='justify-self-center' src="/images/mask-group_4.svg" alt="" />
            <img className='justify-self-center' src="/images/mask-group_5.svg" alt="" />
        </div>
    </div>
  )
}
