import React from 'react'

const BaseLayout = ({children}) => {
  return (
    <div className='px-4 sm:px-10 lg:px-36'>
     {children}
    </div>
  )
}

export default BaseLayout