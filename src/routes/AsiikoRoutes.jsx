import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { Modal, Navbar } from '../components'
import { Home } from '../Pages'

const AsiikoRoutes = () => {
  return (
    <>
    <Modal />
    {/* NAVBAR GOES HERE */}
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
   </>
  )
}

export default AsiikoRoutes