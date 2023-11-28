import React from 'react'

export default function Footer() {
  return (
    <footer className='flex w-full px-20 p-4 bg-gray-100 justify-center'>
        <div className=''>
            <div className='lg:flex hidden items-center  gap-4'>
                <img src="/images/standard-collection-27.svg" alt="" />
                <span className='font-bold'>
                    Lasles<span className='font-extrabold'>VPN</span>
                </span>
            </div>

            <div className='pt-6 pb-6 w-[60%] hidden lg:block'>
                <p>
                <span className='font-bold'>Lasles<span className='font-extrabold'>VPN</span></span> is a private virtual network that has unique features and has high security.
                </p>
            </div>

            <div className='flex'>
                <a href="#"><img src="/images/socmed-facebook.svg" alt="" /></a>
                <a href="#"><img src="/images/socmed-instagram.svg" alt="" /></a>
                <a href="#"><img src="/images/socmed-twitter.svg" alt="" /></a>
            </div>
            <div>
            <p className='opacity-60 lg:mt-7 text-center lg:text-left'>©2020LaslesVPN</p>
            </div>
        </div>
        <div className='hidden lg:flex gap-20 justify-between ml-[30%]'>
            <div className='flex flex-col gap-4'>
                <p className='font-bold mb-6'>Product</p>
                <a href="#">
                    <p className='text-gray-400'>Download</p>
                </a>
                <a href="#">
                    <p className='text-gray-400'>Pricing</p>
                </a>
                <a href="#">
                    <p className='text-gray-400'>Locations</p>
                </a>
                <a href="#">
                    <p className='text-gray-400'>Server</p>
                </a>
                <a href="#">
                    <p className='text-gray-400'>Countries</p>
                </a>
                <a href="#">
                    <p className='text-gray-400'>Blog</p>
                </a>

            </div>

            <div className='hidden lg:flex flex-col gap-4 ml-20'>
                <p className='font-bold mb-6'>Engage</p>
                <a href="#">
                    <p className='text-gray-400'>LaslesVPN</p>
                </a>
                <a href="#">
                    <p className='text-gray-400'>FAQ</p>
                </a>
                <a href="#">
                    <p className='text-gray-400'>Tutorials</p>
                </a>
                <a href="#">
                    <p className='text-gray-400'>About Us</p>
                </a>
                <a href="#">
                    <p className='text-gray-400'>Privacy Policy</p>
                </a>
                <a href="#">
                    <p className='text-gray-400'>Terms of Service</p>
                </a>
            </div>
        </div>
    </footer>
  )
}
