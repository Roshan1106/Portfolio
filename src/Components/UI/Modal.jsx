import React from 'react'
import portfolios from '../../assets/data/portfolioData'

const Modal = ({activeID,setShowModal}) => {

    const portfolio = portfolios.find(portfolio=>portfolio.id === activeID)

  return (
    <div className='w-full h-full fixed top-0 left-0 z-10 border-heading bg-black bg-opacity-70'>
        <div className='max-w-[600] max-h-[600] w-[400px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px]
        transform -translate-x-1/2 -translate-y-1/2 p-5'>
            <div>
                <figure className='flex items-center justify-center'>
                    <img className='rounded-[8px] w-[380px]' src={portfolio.imgUrl } alt="" />
                </figure>
            </div>
            <div>
                <h2 className='text-2xl text-heading font-[700] my-5'>
                    {portfolio.title}
                </h2>
                <p className='text-[14px] leading-6 text-small'>
                    {portfolio.description}
                </p>
                {
                    (portfolio.technologies.length!=0) ? <><div className='mt-5 flex items-center gap-3 flex-wrap'>
                    <h4 className='text-heading text-[18px] text-[600]'>
                        Technoloiges
                    </h4>
                    {
                        portfolio?.technologies?.map((item,index)=>{
                            return<span key={index} className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px]
                            leading-4'>{item}</span>
                        })
                    }
                </div>
                <a href={portfolio.siteUrl}>
                    <button className='bg-primary text-white py-2 px-4 mt-4 rounded-[8px] font-[500]
                    hover:bg-heading ease-in duration-300'>Live Site</button>
                </a></>
                :""}
            </div>
            <button 
            onClick={()=>setShowModal(false)}
            className='w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem]
            right-[1.7rem] hover:text-white hover:bg-red-400 text-[25px] flex justify-center items-center rounded-[3px] leading-0 cursor-pointer'>&times;</button>
        </div>
    </div>
  )
}

export default Modal