import React from 'react'
import PlanPannel from './PlanPannel'

export default function Plans() {
  return (
    <div className='lg:h-screen flex flex-col px-20 items-center'>
        <div className='text-center'>
            <h1 className='text-4xl font-bold leading-relaxed mt-4'>Choose Your Plan</h1>
            <p className='mt-2  leading-relaxed text-gray-600'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
        </div>
        
        <div className='flex flex-col lg:flex-row gap-11 mt-8 px-20'>
            <PlanPannel planName={'Free Plan'} cost={'Free'} included={['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices']}/>
            <PlanPannel planName={'Standard Plan'} cost={'$9 / mo'} included={['Unlimited Bandwitch', 'Encrypted Connection','Yes Traffic Logs','Works on All Devices','Connect Anyware']}/>
            <PlanPannel planName={'Premium Plan'} cost={'$12 / mo'} included={['Unlimited Bandwitch','Encrypted Connection','Yes Traffic Logs','Works on All Devices','Connect Anyware','Get New Features']}/>
        </div>
    </div>
  )
}
