import React from 'react'

const BaseLayout = ({children}) => {
  return (
    <div className='px-4 sm:px-10 lg:px-28'>
     {children}
    </div>
  )
}

export default BaseLayout