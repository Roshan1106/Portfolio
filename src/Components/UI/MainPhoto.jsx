import React,{useState} from 'react'
import Countup from "react-countup"
import heroImg from "../../assets/images/Hero1.png"


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

    const mySelf ="Greetings and a warm welcome!✨ I am thrilled to have you here to read my short and crisp introduction, exploring my creative space and professional journey. This portfolio is a reflection of my passion, dedication, and love for what I do. 😄 On 2003 , 11 of June a very passionate boy wasborn to the couples Ravi Xavier and Arockiya Mary . Yes , Your guess is correct, that's none other than myself. Everyone calls me Roshan and that's my Good name . Basically I'm a 2k kid .I was born and brought up in Sivakasi . And I had B.sc degree in ANJAC , Sivakasi and still in process of exploring .I followed my passion everyday. And I began my new venture of developing my skills. As an initiative, In My college we started a new company named Unijac Technologies by students . And I believe Hardships prepare ordinary people for an extraordinary destiny. But I never ever tried to give up. Basically I'm shrewd in investment so I invested in knowledge to get the best interest"

    const [contents,setContents] = useState(false)
    const [note,setNote] = useState(mySelf.slice(0, 250));

    const content=(e)=>{
        setContents(prev=>!prev)
        setNote(
            contents ? mySelf.slice(0, 250) : mySelf
          );
    }        
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
                    <div >
                        <div className='flex gap-2 mt-10
                         text-heading text-justify font-[600] leading-6 sm:pl-14 sm:pr-10'>
                            <p id='cont' data-aos='fade-left' data-aos-duration='1500' >
                            <span><i class="ri-apps-2-line"></i></span>{note} 
                            <button className='text-primary' onClick={content}>{!contents ? "Read More..." : "...Read Less"}</button> </p>
                        </div>

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
                {/*-------------Photo Start------------*/}
            <div className='pt-10'>                
                <svg id="visual" viewBox="0 0 900 600" width="280" height="240" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                    <mask id='mask1' mask-type='alpha' >
                        <path  className='rotate-180' d="M177 -181.7C214.5 -139.5 219.8 -69.8 215.4 -4.4C211.1 61 197.1 122.1 159.6 170.4C122.1 218.8 61 254.4 2.1 252.3C-56.8 250.1 -113.6 210.3 -154.9 161.9C-196.3 113.6 -222.1 56.8 -229.1 -7C-236 -70.7 -224.1 -141.4 -182.8 -183.6C-141.4 -225.8 -70.7 -239.4 -0.5 -238.9C69.8 -238.4 139.5 -223.9 177 -181.7" fill="#8873ef"></path>
                    </mask>
                    <g mask='url(#mask1)' transform="translate(457.1173799333975 293.262470263615)">
                        <path  className='rotate-180' d="M177 -181.7C214.5 -139.5 219.8 -69.8 215.4 -4.4C211.1 61 197.1 122.1 159.6 170.4C122.1 218.8 61 254.4 2.1 252.3C-56.8 250.1 -113.6 210.3 -154.9 161.9C-196.3 113.6 -222.1 56.8 -229.1 -7C-236 -70.7 -224.1 -141.4 -182.8 -183.6C-141.4 -225.8 -70.7 -239.4 -0.5 -238.9C69.8 -238.4 139.5 -223.9 177 -181.7" fill="#8873ef"></path>
                        <image href={heroImg} x='-200' y='-200' className='w-[450px]' />
                    </g>
                </svg>
            </div>
                {/*-------------Photo End------------*/}
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