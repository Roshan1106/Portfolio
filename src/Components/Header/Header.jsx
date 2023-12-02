import React,{useRef,useEffect} from 'react'

const Header = () => {

    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const stickyHeader=()=>{
        window.addEventListener("scroll",()=>{
            if(document.body.scrollTop>80||document.documentElement.scrollTop>80)
            {
                headerRef.current.classList.add("sticky")
            }
            else
            {
                headerRef.current.classList.remove("sticky")
            }

        })
    }

    const toggle = ()=> menuRef.current.classList.toggle('show_menu')

    useEffect(()=>{
        stickyHeader();

        return window.removeEventListener("scroll",stickyHeader)
    },[])

    const style ="text-small font-[600] hover:transform hover:origin-left hover:text-primary hover:text-[18px] duration-300";

  return (
    <header ref={headerRef} className='w-full h-[80px] leading-[80px] flex items-center'>
        <div className="container">
            <div className='flex items-center justify-between'>

                {/*-------------Logo Start------------*/}

                <div className='flex items-center gap-[10px]'>
                    <span className='w-[35px] h-[35px] bg-primary text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>R
                    </span>
                    <div className='leading-[20px]'>
                        <h2 className='text-xl text-small font-[700]'>Roshan</h2>
                        <p className='text-small text-[14px] font-[500] '>Personal</p>
                    </div>
                </div>

                {/*-------------Logo End------------*/}

                {/*-------------Menu Start------------*/}

                <div onClick={toggle} ref={menuRef} className="menu">
                    <ul className='flex items-center gap-10'>
                        <li><a className={style} href="#about">About</a></li>
                        <li><a className={style} href="#service">Service</a></li>
                        <li><a className={style} href="#portfolio">Portfolio</a></li>
                        <li><a className={style} href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/*-------------Menu End------------*/}


                {/*-------------Menu Right------------*/}

                <div className="flex items-center gap-4">
                    <button className='flex items-center gap-2 text-primary font-[600] border border-solid border-small py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-primary hover:text-white hover:font-[500] ease-in duration-500'>
                        <i class="ri-send-plane-line"></i>Let's Talk
                    </button>
                    <span onClick={toggle} className='text-2xl text-small md:hidden cursor-pointer'>
                        <i class="ri-menu-line"></i>
                    </span>
                </div>

                {/*-------------Menu End------------*/}

            </div>
        </div>
    </header>
  )
}

export default Header