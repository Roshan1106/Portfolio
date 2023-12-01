import React from 'react'

const Service = () => {
  return (
    <section id='service'>
        <div className='container lg:pt-5'>
            <div className="text-center">
                <h2 className='text-heading font-[800] text-[2.4rem] mb-5'>Skills</h2>
                <p className='lg:max-w-[600px] lg:mx-auto text-heading font-[500] text-[16px] leading-7'>
                Here are some of my skills on which I have been working on for the past 2 years.
                </p>
            </div>

            <div className="flex flex-col justify-center sm:py-12">
                <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                    <div className="relative text-gray-700 antialiased text-sm font-semibold">
                    {/*================Vertical Running===================*/}
                        <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2
                        transform -translate-x-1/2'></div>
                    {/*================Left Card 1===================*/}
                <div className='mt-6 sm:mt-0 sm:mb-12 '>
                    <div className='flex flex-col items-center sm:flex-row'>
                        <div className='flex justify-start items-center w-full mx-auto'>
                            <div className='w-full sm:w-1/2 sm:pr-8'>
                                <div data-aos='fade-right' data-aos-duration='1200'
                                className='bg-white p-4 rounded shadow-md  shadow-primary group hover:bg-primary cursor-pointer ease-in duration-200'>
                                    <h3 className='text-primary text-center font-[700] mb-3 group-hover:text-white group-hover:font-[700] text-2xl leading-7'>
                                        Libraries & Frameworks & Tools</h3>
                                        <p className=' text-small group-hover:text-white group-hover:font-[500]'>
                                           </p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-full bg-primary border-white border-4 w-10 h-10
                        absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0
                        flex items-center justify-center text-white'>
                                <i class="ri-macbook-line"></i>
                        </div>
                    </div>
                </div>
                    {/*================Right Card 2===================*/}

                    <div className='mt-6 sm:mt-0 sm:mb-12'>
                    <div className='flex flex-col items-center sm:flex-row'>
                        <div className='flex justify-end items-center w-full mx-auto'>
                            <div className='w-full sm:w-1/2 sm:pl-8'>
                                <div data-aos='fade-left' data-aos-duration='1200'
                                className='bg-white p-4 rounded shadow group hover:bg-primary cursor-pointer ease-in duration-200'>
                                    <h3 className='text-primary font-[700] mb-3 group-hover:text-white group-hover:font-[700] text-2xl leading-7'>
                                        Front-End Development </h3>
                                        <p className='text-[15px] text-small group-hover:text-white group-hover:font-[500]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate atque mollitia perspiciatis harum iste nostrum recusandae quam, cum eos! Quisquam?</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-full bg-primary border-white border-4 w-10 h-10
                        absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0
                        flex items-center justify-center text-white'>
                                <i class="ri-server-line"></i>
                        </div>
                    </div>

                </div>
                    {/*================Left Card 3===================*/}
                <div className='mt-6 sm:mt-0 sm:mb-12'>
                    <div className='flex flex-col items-center sm:flex-row'>
                        <div className='flex justify-start items-center w-full mx-auto'>
                            <div className='w-full sm:w-1/2 sm:pr-8'>
                                <div data-aos='fade-right' data-aos-duration='1200'
                                className='bg-white p-4 rounded shadow group hover:bg-primary cursor-pointer ease-in duration-200'>
                                    <h3 className='text-primary font-[700] mb-3 group-hover:text-white group-hover:font-[700] text-2xl leading-7'>
                                        Front-End Development </h3>
                                        <p className='text-[15px] text-small group-hover:text-white group-hover:font-[500]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate atque mollitia perspiciatis harum iste nostrum recusandae quam, cum eos! Quisquam?</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-full bg-primary border-white border-4 w-10 h-10
                        absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0
                        flex items-center justify-center text-white'>
                                <i class="ri-database-2-line"></i>
                        </div>
                    </div>

                </div>
                    {/*================Right Card 4===================*/}

                    <div className='mt-6 sm:mt-0 sm:mb-12'>
                    <div className='flex flex-col items-center sm:flex-row'>
                        <div className='flex justify-end items-center w-full mx-auto'>
                            <div className='w-full sm:w-1/2 sm:pl-8'>
                                <div data-aos='fade-left' data-aos-duration='1200'
                                className='bg-white p-4 rounded shadow group hover:bg-primary cursor-pointer ease-in duration-200'>
                                    <h3 className='text-primary font-[700] mb-3 group-hover:text-white group-hover:font-[700] text-2xl leading-7'>
                                        Front-End Development </h3>
                                        <p className='text-[15px] text-small group-hover:text-white group-hover:font-[500]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate atque mollitia perspiciatis harum iste nostrum recusandae quam, cum eos! Quisquam?</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-full bg-primary border-white border-4 w-10 h-10
                        absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0
                        flex items-center justify-center text-white'>
                                <i class="ri-tools-fill"></i>
                        </div>
                    </div>

                </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service