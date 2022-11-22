import React from 'react'
import { BaseLayout } from '../layouts'
import HeroImg from "../assets/hero_img.png"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { Button } from '../components'

const Home = ({displayModal}) => {
    return (
    <BaseLayout>
      {/* HOME SECTION */}
      <div className='flex flex-col lg:items-center lg:justify-between lg:flex lg:flex-row max-h-[calc(100vh_-_51px)] w-full'>
        {/* HOMEPAGE TEXT CONTENT */}
        <div className='w-full lg:w-1/2 gap-y-6 lg:min-h-screen lg:h-full flex flex-col lg:justify-center my-10 lg:my-0'>  

          <div className='   flex flex-col font-bold text-3xl lg:text-5xl gap-y-3'>
           <p>Track Your Employees'</p>
           <p>Time And Automate</p>
           <p>Your Timesheets.</p>
          </div>

          <div className='relative w-2/4 flex justify-center after:w-5/12 after:bg-blue-500 after:absolute after:h-0.5 after:top-1/2 after:right-0  before:w-5/12 before:bg-blue-500 before:absolute before:h-0.5 before:top-1/2 before:left-0 '>
            <IoMdCheckmarkCircleOutline  className='text-xl text-blue-500'/>
          </div>

          <p className='leading-loose w-full lg:w-3/4 text-slate-400 font-medium'>Asiiko helps you track your employees time and automate timesheets.Everday,real-time updates that lets you keep on top of your teams job activities.
          </p>

          <div className='flex flex-col lg:flex-row gap-5'>
            <div className='w-full lg:w-60 h-14'><Button bg_color="bg-blue-500"  txt_color="text-white" content={"GET STARTED TODAY"} handleClick={displayModal}/></div>
            <div className='w-full lg:w-60 h-14'><Button bg_color="bg-cyan-300" content={"LEARN MORE"} handleClick={displayModal}/></div>

          </div>

        </div>

        {/* HERO IMAGE */}
        <div className='w-full lg:w-1/2 h-full flex justify-center lg:justify-end'>
            <img src={HeroImg} 
             alt="asiiko_hero_image"  
             className='object-contain w-80 h-80 lg:w-auto lg:h-auto'
             />
             

        </div>
      </div>
    </BaseLayout>
  )
}

export default Home