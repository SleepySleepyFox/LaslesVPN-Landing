import React from 'react'
import Button from './Button'

export default function PlanPannel({planName, included, cost}) {

  const includedInPlan = included.map(e => (
    <div className='flex gap-2 w-full'>
      <img src="/images/jam-check.svg" alt="" />
      <p className='text-gray-600'>{e}</p>
    </div>
  ))

  return (
    <div className='flex flex-col items-center lg:w-[330px] lg:h-[760px] border-gray-100 border-2 rounded-lg hover:border-red-400 ease-out duration-300 justify-between p-8'>
      <div>
        <div className='text-center flex flex-col items-center'> 
          <img src="/images/illustration-premium.svg" alt="" className='hidden lg:block' />
          <h3 className='font-bold text-gray-600 mt-4'>{planName}</h3>
        </div>

        <div className='w-full mt-10 flex flex-col gap-4'>
          {includedInPlan}
        </div>
      </div>

      <div className='text-center'>
        <h1 className='font-black mb-2'>{cost}</h1>
          <Button text={'Select'} textStyle={'text-red-500 font-bold px-24'}/>
      </div>
    </div>
  )
}
