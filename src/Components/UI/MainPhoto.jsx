import React, { useEffect, useState, useRef } from 'react';
import Countup from "react-countup"
import heroImg1 from "../../assets/images/HeroImg.jpg"
import heroImg2 from "../../assets/images/Hero.png"
import heroImg3 from "../../assets/images/profile1.png"
import heroImg4 from "../../assets/images/profile2.jpg"
import heroImg5 from "../../assets/images/profile3.png"

const MainPhoto = () => {

    const ref = useRef();

    const details=[
        {
            start:0,
            end:14,
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



        // useEffect(() => {
        //     const element = ref.current;
        //   const anim = Lottie.loadAnimation({
        //     container: element,
        //     renderer: 'svg',
        //     loop: true,
        //     autoplay: true,
        //     animationData: dot,
        //   });
      
        //   return () => anim.destroy();
        // }, []);


    const content=(e)=>{
        setContents(prev=>!prev)
        setNote(
            contents ? mySelf.slice(0, 250) : mySelf
          );
    }        
  return (
    <section className='pt-0' id='about'>
        <div className="container pt-5">
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
                            <button className='text-primary pl-2' onClick={content}>{!contents ? "Read More..." : "...Read Less"}</button> </p>
                        </div>

                    <div className='w-full h-6 flex items-center gap-3 mt-7'>
                        <span className='text-small text-[18px] font-[600]'>Follow Me:</span>
                        <span><a target="_blank" href="https://www.linkedin.com/in/roshan-david-r-5a748b273" className='text-small text-[18px] font-[600] hover:text-[24px] duration-300 hover:text-blue-500'><i class="ri-linkedin-fill"></i></a></span>
                        <span><a target="_blank" href="https://github.com/Roshan1106" className='text-small text-[18px] font-[600] hover:text-[24px] duration-300 hover:text-black'><i class="ri-github-line"></i></a></span>
                        <span><a href="https://www.instagram.com/roshan_david_r" target="_blank" className='text-small text-[18px] font-[600] hover:text-[24px] duration-300 hover:text-red-600'><i class="ri-instagram-line"></i></a></span>
                        <span><a href="https://www.facebook.com/RRoshan%20David" target="_blank" className='text-small text-[18px] font-[600] hover:text-[24px] duration-300 hover:text-blue-500'><i class="ri-facebook-fill"></i></a></span>
                        <span><a href="#linkedin" className='text-small text-[18px] font-[600] hover:text-[24px] duration-300 hover:text-blue-500 '><i class="ri-twitter-line"></i></a></span>
                    </div>

                    </div>
                </div>
                {/*-------------Photo Start------------*/}
                <div className='pt-5'>
                    <div className='flex items-center justify-center border-2 border-black rounded-full overflow-hidden w-[300px] h-[300px]'>
                        <img src={heroImg4} className='w-[100%] pt-16' alt=""/>
                    </div>
                </div>
                {/*-------------Photo End------------*/}
                {/*-------------Content Start------------*/}

                <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
                md:flex-col md:justify-end md:text-end'>
                {
                    details.map(({start,end,duration,content})=>{
                        return <div className='mb-10'>
                                    <h2 className='text-heading font-[700] text-[32px]'>
                                        <Countup start={start} end={end} duration={duration} suffix='+' />
                                    </h2>
                                    <h4 className='text-heading font-[500] text-[18px]'>
                                        {content}
                                    </h4>
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