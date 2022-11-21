import React from 'react'

const Button = ({content, bg_color , txt_color , handleClick}) => {
  return (
    <button 
     className={`w-full h-full border rounded-lg shadow-sm text-center font-medium px-2 ${bg_color} ${txt_color} `}
     onClick={handleClick}
     >
      {content}
    </button>
  )
}

export default Button