import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { Navbar } from '../components'
import { Home } from '../Pages'

const AsiikoRoutes = () => {
  return (
    <>
    {/* NAVBAR GOES HERE */}
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
   </>
  )
}

export default AsiikoRoutes