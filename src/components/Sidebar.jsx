import React from 'react'

export default function Sidebar({SideBarStatus, changeStatus}) {
  return (
    <div className={`lg:hidden flex flex-col bg-slate-50 h-screen fixed top-0 left-0 text-white ${SideBarStatus ? 'w-[40%] ease-out duration-150' : 'w-[0%] left-[-10%] ease-out duration-150'}`}>
      <div className="self-end p-4 text-black font-bold cursor-default" onClick={() => changeStatus(false)}>X</div>
      <div className='flex justify-center'>
        <ul className='text-lg flex flex-col gap-6 pt-7 text-center text-black'>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Features</li></a>
          <a href="#"><li>Pricing</li></a>
          <a href="#"><li>Testimonials</li></a>
          <a href="#"><li>Help</li></a>
        </ul>
      </div>
      
    </div>
  )
}
