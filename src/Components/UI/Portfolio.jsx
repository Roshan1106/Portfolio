import  data  from '../../assets/data/portfolioData'
import React,{useEffect,useState} from 'react'
import Modal from './Modal'

const Portfolio = () => {

    const [nextItem,setNextItem] = useState(6)
    const [portfolios,setportfolios] = useState(data)
    const [selectTab,setSelectTab] = useState('all')
    const [showModal,setShowModal] = useState(false)
    const [activeID,setActiveID] = useState(null)

    const loadMoreHandler=()=>{
        setNextItem(prev => prev + 3)
    }

    const setActiveModalHandler = id =>{
        setShowModal(true)
        setActiveID(id)
    }

    useEffect(()=>{
        
        if(selectTab==='all'){
            setportfolios(data)
        }

        if(selectTab==='projects')
        {
            const filteredData  = data.filter(item=>item.category==='projects')
            setportfolios(filteredData)
        }

        if(selectTab==='certificate')
        {
            const filteredData  = data.filter(item=>item.category==='certificate')
            setportfolios(filteredData)
        }

    },[selectTab])

  return (
    <section id="portfolio">
        <div className="container">
            {/*================Top Header===================*/}
            <div className='flex items-center justify-between flex-wrap'>

                <div className='mb-7 sm:mb-0'>
                    <h3 className='text-heading text-[2rem] font-[700]'>
                        My Projects & Certificates
                    </h3>
                </div>

                <div className='flex gap-3'>

                    <button 
                    onClick={()=>setSelectTab('all')}
                    className='text-small border border-solid border-small py-2 px-4
                    rounded-[8px]'>
                        All
                    </button>

                    <button
                    onClick={()=>setSelectTab('projects')}
                    className='text-small border border-solid border-small py-2 px-4
                    rounded-[8px]'>
                        Projects
                    </button>

                    <button 
                    onClick={()=>setSelectTab('certificate')}
                    className='text-small border border-solid border-small py-2 px-4
                    rounded-[8px]'>
                        Certificates
                    </button>

                </div>

            </div>

            {/*================Card===================*/}
            <div className='flex item-center gap-4 flex-wrap mt-12'>
                {
                    portfolios?.slice(0,nextItem)?.map((port,index)=>(
                        <div
                        key={index}
                        data-aos='fade-zoom-in' 
                        data-aos-delay='50' 
                        data-aos-duration='1000' 
                        className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1] p-5'>
                            <figure>
                                <img className='rounded-[8px]' src={port.imgUrl} alt="" />
                            </figure>
                            <div className='w-full h-full bg-primary bg-opacity-40 absolute top-0 left-0 z-[5]
                            hidden group-hover:block'>
                                <div className='w-full h-full flex items-center justify-center '>
                                    <button 
                                    onClick={()=>setActiveModalHandler(port.id)}
                                    className='text-white bg-heading hover:bg-small py-2
                                    px-4 rounded-[8px] font-[500] ease-in duration-200'>
                                        See Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/*================More Button===================*/}

            <div className='text-center mt-6'>
                {
                    nextItem < portfolios.length && data.length > 6 && (
                    <button onClick={loadMoreHandler} className='text-white bg-heading hover:bg-small py-2
                    px-4 rounded-[8px] font-[500] ease-in duration-200'>
                    Load More
                    </button>
                )}
            </div>

        </div>

        {
            showModal && <Modal setShowModal={setShowModal} activeID={activeID} />
        }

    </section>
  )
}

export default Portfolio