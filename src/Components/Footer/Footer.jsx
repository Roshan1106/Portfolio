import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#12141e] pt-12'>
      <div className='container'>
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className="w-full sm:w-1/2">
            <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
              Do you want to make beautiful products?
            </h2>
            <a href="#contact">
              <button className='bg-primary text-white font-[600] flex items-center gap-2 hover:bg-small ease-in duration-300 py-2 px-4 rounded-[8px]'>
                  <i class="ri-mail-line"></i>Hire Me</button>
            </a>
          </div>
          <div className='w-full sm:w-1/2'>
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam itaque magni sunt temporibus autem facilis sapiente repudiandae veritatis iusto reprehenderit?
            </p>
            <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
                        <span className='text-gray-300 text-[18px] font-[600]'>Follow Me:</span>
                        <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'><a href="#linkedin" className=' text-gray-300 text-[18px] font-[500] duration-300   hover:text-blue-500'><i class="ri-linkedin-fill"></i></a></span>
                        <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'><a href="#linkedin" className=' text-gray-300 text-[18px] font-[500] duration-300   hover:text-black'><i class="ri-github-line"></i></a></span>
                        <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'><a href="#linkedin" className=' text-gray-300 text-[18px] font-[500] duration-300   hover:text-blue-500'><i class="ri-facebook-fill"></i></a></span>
                        <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'><a href="#linkedin" className=' text-gray-300 text-[18px] font-[500] duration-300   hover:text-red-600'><i class="ri-instagram-line"></i></a></span>
                        <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'><a href="#linkedin" className=' text-gray-300 text-[18px] font-[500] duration-300   hover:text-blue-500 '><i class="ri-twitter-line"></i></a></span>
                    </div>
          </div>
        </div>
        <div>
            <ul className='flex items-center gap-10 mt-10'>
                <li><a className='text-gray-400 font-[600]' href="#about">About</a></li>
                <li><a className='text-gray-400 font-[600]' href="#service">Service</a></li>
                <li><a className='text-gray-400 font-[600]' href="#portfolio">Portfolio</a></li>
                <li><a className='text-gray-400 font-[600]' href="#contact">Contact</a></li>
            </ul>
        </div>
      </div>
      <div className=' bg-[#1b1e29] py-5 mt-14'>

          <div className='container'>
              <div className='flex items-center justify-center sm:justify-between'>
                  
                  <div className='hidden sm:block'>
                    <div className='flex items-center gap-[10px]'>
                        <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33]
                        text-white font-500] text-[18px] flex items-center justify-center'>R</span>
                        <div className='leading-[20px]'>
                            <h2 className='text-gray-200 font-[500] text-[18px]'>
                              Roshan
                            </h2>
                            <p className='text-gray-300 font-[400] text-[14px]'>
                              Personal
                            </p>
                        </div>
                    </div>
                  </div>
              <div>
                <p className='text-gray-300 text-[15px]'>
                    Copyright 2023 Developed by Roshan💙 - All right reserved.
                </p>
              </div>
              </div>
          </div>
    
      </div>
    </footer>
    )
}

export default Footer