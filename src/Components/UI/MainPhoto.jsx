import React from 'react'
import Countup from "react-countup"
import heroImg from "../../assets/images/Hero1.png"
import BackGoundImg from "../../assets/images/BackGround.png"


const MainPhoto = () => {
    const details=[
        {
            start:0,
            end:6,
            duration:4,
            content:"Yrs of Education",
        },
        {
            start:0,
            end:3,
            duration:4,
            content:"Demo Projects",
        },
        {
            start:0,
            end:8,
            duration:4,
            content:"Programming Language",
        },
        {
            start:0,
            end:3,
            duration:4,
            content:"Certificates",
        },
        {
            start:0,
            end:10,
            duration:4,
            content:"Tools",
        },
    ]

        

  return (
    <section className='pt-0' id='about'>
        <div className="container pt-14">
            <div className='md:flex items-center justify-between sm:flex-row'>
                
                <div className='w-full  md:basis-1/2'>

                    <h5 data-aos='fade-right' data-aos-duration='1500' className='text-heading font-[600]
                    text-[16px]'>Hello Welcome,</h5>

                    <h1 data-aos='fade-up' data-aos-duration='1500' className='text-heading font-[800]
                    text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>I'm Roshan David <br /> Web-Developer</h1>

                    <div data-aos='fade-up' data-aos-duration='1500' data-aos-delay='200' 
                    className='flex items-center gap-6 mt-7'>

                        <a href="#contact">
                            <button className='bg-primary text-white font-[600] flex items-center gap-2 hover:bg-small ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                <i class="ri-mail-line"></i>Hire Me</button>
                        </a>
                        <a href="#portfolio" className='text-small font-[600] text-[16px] border-b border-solid border-small'> See Portfolio </a>    
                    </div>
                    <div>
                    <p data-aos='fade-left' data-aos-duration='1500' className='flex gap-2 mt-14
                     text-heading font-[500] leading-6 sm:pl-14 sm:pr-10'>
                        <span><i class="ri-apps-2-line"></i></span>Lorem ipsum dolor 
                     sit amet consectetur adipisicing elit. Tempore deleniti velit deserunt sed 
                     doloremque consequatur officia quis accusantium, qui, rerum numquam labore! 
                     Repellendus quia sit voluptatibus tenetur natus ex? Ipsa.</p>

                    <div className='w-full h-6 flex items-center gap-3 mt-14'>
                        <span className='text-small text-[18px] font-[600]'>Follow Me:</span>
                        <span><a href="#linkedin" className='text-small text-[18px] font-[600] hover:text-[24px] duration-300 hover:text-blue-500'><i class="ri-linkedin-fill"></i></a></span>
                        <span><a href="#linkedin" className='text-small text-[18px] font-[600] hover:text-[24px] duration-300 hover:text-black'><i class="ri-github-line"></i></a></span>
                        <span><a href="#linkedin" className='text-small text-[18px] font-[600] hover:text-[24px] duration-300 hover:text-blue-500'><i class="ri-facebook-fill"></i></a></span>
                        <span><a href="#linkedin" className='text-small text-[18px] font-[600] hover:text-[24px] duration-300 hover:text-red-600'><i class="ri-instagram-line"></i></a></span>
                        <span><a href="#linkedin" className='text-small text-[18px] font-[600] hover:text-[24px] duration-300 hover:text-blue-500 '><i class="ri-twitter-line"></i></a></span>
                    </div>

                    </div>
                </div>
            <div className=''>                
                <svg id="visual" viewBox="0 0 900 600" width="450" height="400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                    <mask id='mask1' mask-type='alpha' >
                        <path  className='rotate-180' d="M177 -181.7C214.5 -139.5 219.8 -69.8 215.4 -4.4C211.1 61 197.1 122.1 159.6 170.4C122.1 218.8 61 254.4 2.1 252.3C-56.8 250.1 -113.6 210.3 -154.9 161.9C-196.3 113.6 -222.1 56.8 -229.1 -7C-236 -70.7 -224.1 -141.4 -182.8 -183.6C-141.4 -225.8 -70.7 -239.4 -0.5 -238.9C69.8 -238.4 139.5 -223.9 177 -181.7" fill="#8873ef"></path>
                    </mask>
                    <g mask='url(#mask1)' transform="translate(457.1173799333975 293.262470263615)">
                        <path  className='rotate-180' d="M177 -181.7C214.5 -139.5 219.8 -69.8 215.4 -4.4C211.1 61 197.1 122.1 159.6 170.4C122.1 218.8 61 254.4 2.1 252.3C-56.8 250.1 -113.6 210.3 -154.9 161.9C-196.3 113.6 -222.1 56.8 -229.1 -7C-236 -70.7 -224.1 -141.4 -182.8 -183.6C-141.4 -225.8 -70.7 -239.4 -0.5 -238.9C69.8 -238.4 139.5 -223.9 177 -181.7" fill="#8873ef"></path>
                        <image href={heroImg} x='-200' y='-200' className='w-[450px]' />
                    </g>
                </svg>
            </div>
                {/*-------------Content Start------------*/}

                <div>
                {
                    details.map(({start,end,duration,content})=>{
                        return <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
                        md:flex-col md:justify-end md:text:end'>
                            <div className='mb-10'>
                                <h2 className='text-heading font-[700] text-[32px]'>
                                    <Countup start={start} end={end} duration={duration} suffix='+' />
                                </h2>
                                <h4 className='text-heading font-[500] text-[18px]'>
                                    {content}
                                </h4>
                            </div>
                        </div>
                    })
                }
                </div>

                {/*-------------Content End------------*/}

            </div>
        </div>
    </section>
  )
}

export default MainPhoto