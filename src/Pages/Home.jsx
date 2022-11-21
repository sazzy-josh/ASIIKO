import React from 'react'
import { BaseLayout } from '../layouts'
import HeroImg from "../assets/hero_img.png"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

const Home = () => {
    return (
    <BaseLayout>
      {/* HOME SECTION */}
      <div className='flex flex-col lg:items-center lg:justify-between lg:flex lg:flex-row max-h-[calc(100vh_-_51px)] w-full'>
        {/* HOMEPAGE TEXT CONTENT */}
        <div className='w-full lg:w-1/2 gap-y-3 min-h-screen lg:h-full flex flex-col justify-center'>  

          <div className='   flex flex-col font-bold text-2xl lg:text-5xl gap-y-3'>
           <p>Track Your Employees'</p>
           <p>Time And Automate</p>
           <p>Your Timesheets.</p>
          </div>

          <div className='relative w-2/4 flex justify-center after:w-5/12 after:bg-blue-400 after:absolute after:h-0.5 after:top-1/2 after:right-0  before:w-5/12 before:bg-blue-400 before:absolute before:h-0.5 before:top-1/2 before:left-0 '>
            <IoMdCheckmarkCircleOutline className='text-lg text-blue-400'/>
          </div>

          <p className='leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rerum assumenda labore eum commodi perspiciatis, accusamus excepturi? Voluptate tempore facilis doloremque, cumque vel dolor eum, sunt itaque aut exercitationem quae ullam esse nesciunt eos illum, hic modi perferendis nam molestiae magnam nobis ex. A voluptate cum, rem nihil consequuntur est.</p>

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