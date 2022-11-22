import React ,{ useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import { Modal, Navbar } from '../components'
import { Home } from '../Pages'

const AsiikoRoutes = () => {

  const [showModal , setShowodal] = useState(false)

  const handleModal = () => {
     setShowodal(prev => !prev)
   }

  return (
    <>
   {showModal ? <Modal closeModal={handleModal} /> : null}
    {/* NAVBAR GOES HERE */}
    <Navbar />

    <Routes>
      <Route path="/" element={<Home displayModal={handleModal}/>} />
    </Routes>
   </>
  )
}

export default AsiikoRoutes