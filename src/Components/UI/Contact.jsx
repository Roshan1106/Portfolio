import React from 'react'
import img from "../../assets/images/Gif.svg"

const Contact = () => {
  return (
    <section id="contact">
            <h2 className='text-heading text-[2.5rem] font-[700] text-center mb-4'>
                Get In Touch
            </h2>
        <div className='w-full flex justify-center items-center container'>
            <div className='md:w-[60%] md:flex justify-center items-center'>
                <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
                    <img src={img} width={1000} alt="" />
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.648923131739!2d77.80434417387255!3d9.452151282224133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06ceee14cfd42f%3A0x9c8297245ca3a57!2sSenayapuram%20Colony%2C%20Sivakasi%2C%20Tamil%20Nadu%20626123!5e0!3m2!1sen!2sin!4v1701337047932!5m2!1sen!2sin" className='w-full h-full border-0' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
                <div className='w-full mb-28 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100
                px-4 lg:px-8 py-8'>
                    <div className='w-full'>
                        <div className='mb-5'>
                            <input type="text" name="" placeholder='Enter Your Name' className='w-full p-3 focus:outline-none rounded-[5px]' id="" />
                        </div>
                        <div className='mb-5'>
                            <input type="email" name="" placeholder='Enter Your Email' className='w-full p-3 focus:outline-none rounded-[5px]' id="" />
                        </div>
                        <div className='mb-5'>
                            <input type="text" name="" placeholder='Subject' className='w-full p-3 focus:outline-none rounded-[5px]' id="" />
                        </div>
                        <div className='mb-5'>
                            <textarea type="text" rows={3} name="" placeholder='Write Your Message' className='w-full p-3 focus:outline-none rounded-[5px]' id="" />
                        </div>
                        <button className='w-full p-3 focus:outline-none rounded-[5px] bg-small text-white
                        hover:bg-heading text-center ease-linear duration-150'>
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact