import React from 'react'

const Card = ({bg_color , content , children}) => {
  return (
    //* CARD COMPONENT TAKES THE WIDTH OF ITS PARENT CONTAINER
    <div className='flex flex-col h-28 lg:h-36 w-72 lg:w-96'>
       <div className={`h-1/3 flex items-center justify-center text-base lg:text-lg font-medium ${bg_color} text-white rounded-tr-lg rounded-tl-lg`}>{content}</div>
       <div className='h-2/3'>
         {children}
       </div>
    </div>
  )
}

export default Card