import React, { useState } from 'react'
import Button from './Button'
import Sidebar from './Sidebar'

export default function Navbar() {
  const [sideBar, setSideBar] = useState(false)
  return (
    <header className='flex justify-between items-center p-8 px-20'>
      <div className='flex w-full lg:hidden justify-between items-center px-2 p-2'>
        <img className='h-6' src="/images/icons8-menu.svg" alt="" onClick={() => {setSideBar(e => !e)}}/>
        <img  className='h-6' src="/images/standard-collection-27.svg" alt="" />
        <Sidebar SideBarStatus={sideBar} changeStatus={setSideBar}/>
      </div>


      <div className='lg:flex hidden items-center justify-between gap-4'>
        <img className='w-9 h-9' src="/images/standard-collection-27.svg" alt="" />
        <span className='font-bold'>
          Lasles<span className='font-extrabold'>VPN</span>
        </span>
      </div>

      <div>
        <ul className='lg:flex hidden gap-10'>
          <a href="#" className='hover:text-red-400 ease-in duration-200'><li>About</li></a>
          <a href="#" className='hover:text-red-400 ease-in duration-200'><li>Features</li></a>
          <a href="#" className='hover:text-red-400 ease-in duration-200'><li>Pricing</li></a>
          <a href="#" className='hover:text-red-400 ease-in duration-200'><li>Testimonials</li></a>
          <a href="#" className='hover:text-red-400 ease-in duration-200'><li>Help</li></a>
        </ul>
      </div>

      <div className='lg:flex hidden gap-10 justify-center items-center'>
        <a href="#" className='font-bold hover:text-red-400 ease-in duration-200'>Sign In</a>
        <Button text={'Sign Up'} textStyle={'font-bold text-red-400'}/>
      </div>
    </header>
  )
}
