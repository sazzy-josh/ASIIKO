import React from 'react'
import { BaseLayout } from '../layouts'
import HeroImg from "../assets/hero_img.png"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

const Home = () => {
    return (
    <BaseLayout>
      {/* HOME SECTION */}
      <div className='flex flex-col lg:items-center  lg:justify-between lg:flex lg:flex-row max-h-[calc(100vh_-_51px)] w-full'>
        {/* HOMEPAGE TEXT CONTENT */}
        <div className='w-full lg:w-1/2 min-h-screen lg:h-full flex flex-col justify-center'>  

          <div className='   flex flex-col font-bold text-2xl lg:text-5xl'>
           <p>Track Your Employees'</p>
           <p>Time And Automate</p>
           <p>Your Timesheets.</p>
          </div>

          <div className='before:w-10 before:h-10 before:bg-slate-900'>
            <IoMdCheckmarkCircleOutline/>
          </div>

        </div>

        {/* HERO IMAGE */}
        <div className='w-1/2 h-full flex  justify-end'>
            <img src={HeroImg} 
             alt="asiiko_hero_image"  
             className='object-contain '
             />

        </div>
      </div>
    </BaseLayout>
  )
}

export default Home