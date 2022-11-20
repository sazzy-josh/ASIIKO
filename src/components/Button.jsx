import React from 'react'

const Button = ({content, bg_color , txt_color , handleClick}) => {
  return (
    <button 
     className={`w-full h-full border rounded-xl shadow-sm text-center font-medium ${bg_color} ${txt_color}`}
     onClick={handleClick}
     >
      {content}
    </button>
  )
}

export default Button