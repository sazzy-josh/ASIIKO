import React from 'react'
import Button from './Button'
import Card from './Card'
import appStore_image from "../assets/img3.png"


const Modal = () => {
  return (
    // MODAL OVERLAY
    <div className='w-screen h-screen fixed top-0 left-0 z-[999]'>
      <div className='w-full h-full bg-black opacity-50'></div>

      {/* MODAL CONTENT */}
      <div className='flex flex-col items-center justify-center gap-y-10 h-auto lg:h-1/2 w-5/6 bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] border rounded-3xl shadow-sm p-2 lg:p-4 py-10'> 
       <span className='absolute top-2 right-3  w-7 h-7 rounded-full border-2 border-slate-500 flex justify-center items-center'>
       <p className=' font-medium  text-black  text-4xl rotate-45 '>+</p>
       </span>
       <p className='font-bold text-2xl lg:text-3xl text-center'>Start using Asiiko for <br /> your team today!</p>
    
       {/* MODAL CARDS GOES HERE */}
       <div className='flex flex-col lg:gap-x-10 gap-y-4 lg:flex-row'>
        {/* CARD LAYOUT */}
        <div className=''>
        <Card content={"For Organizations"} bg_color="bg-black">
          <div className='h-full bg-blue-100 flex gap-x-4 justify-center items-center'>
            <div className='w-2/6 h-10'>
              <Button bg_color="bg-blue-500" content="LOG IN" txt_color="text-white" />
            </div>
            <div className='w-2/6 h-10'>
              <Button bg_color="bg-white" content="SIGN UP" txt_color="text-black" />
            </div>
          </div>
        </Card>
        </div>

        <Card content={"For Workers"} bg_color="bg-green-600">
        <div className='h-full bg-slate-100 flex justify-center items-center'>
         <img src={appStore_image} alt="download_buttons" />
        </div>
        </Card>
        
       </div>
      

     </div>

    </div>

   
  )
}

export default Modal