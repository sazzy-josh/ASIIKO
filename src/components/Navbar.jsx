import { useState } from "react"
import { Link } from "react-router-dom"
import { NavItems } from "../mock-data" 
import { BaseLayout } from "../layouts"
import Logo from "../assets/img2.png"
import Button from "./Button"
import { HiMenuAlt3 } from "react-icons/hi"

const Navbar = () => {
   const [ ToggleMenu , handleToggleMenu] = useState(false)

  return (
    <BaseLayout>
       {/* NAV MAIN LAYOUT */}
       <div className="flex py-3 box-border justify-between items-center w-full">

         {/* LOGO GOES HERE */}
         <div className="z-[99]">
          <Link to='/'>
            <img src={Logo} alt="asiiko_logo" className="w-25 h-8 lg:w-30 lg:h-10 object-contain "/>
          </Link>
         </div>

         {/* NAV ITEMS FOR LARGE SCREENS*/}
         <div className="hidden lg:flex gap-x-8">
            {NavItems.map((item) => {
          return (
            <div key={item.id} className="font-medium cursor-pointer">
              {item.title}
            </div>
        )
       })}
         </div>

         {/* CALL TO ACTION BUTTONS FOR LARGE SCREENS */}
         <div className="hidden lg:flex gap-x-5">
           <div className="h-12 w-32 ">
            <Button content="LOG IN" bg_color="bg-blue-500" txt_color="text-white" />
           </div>
           <div className="h-12 w-auto">
           <Button content="GET STARTED" bg_color="bg-cyan-300" txt_color="text-black" />
           </div>
         </div>

         {/* HAMBURGER MENU ICON */}
         <div className="block lg:hidden cursor-pointer"
         onClick={() => handleToggleMenu(prev => !prev) }
         >
            <HiMenuAlt3 size={35}/>
         </div>

       </div>

         
         {/* NAV MENU ITEMS FOR SMALL SCREENS */}
         <div className={`flex flex-row gap-y-3 lg:hidden  text-center z-20 fixed top-0 left-0 w-full h-screen transition-all duration-700 ease-in-out overflow-hidden ${!ToggleMenu ? "-translate-x-full" : "translate-x-0"}`}>
         <div className="flex flex-col items-center justify-center w-2/3 relative h-full bg-white">
         {/* CLOSE NAVBAR CALL TO ACTION BUTTON FOR SMALL SCREENS*/}
         <div className="px-1 z-30 bg-white rounded fixed top-1 right-2 shadow-sm w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={() => handleToggleMenu(prev => !prev) }
         >
           <p className="rotate-[45deg] text-6xl text-black ">+</p>
         </div>
         {/* MENU ITEMS GOES HERE */}
         <div className="flex flex-col gap-y-4 w-full">
         {NavItems.map((item) => {
          return (
             <div key={item.id} className="font-medium w-full p-2 rounded-md cursor-pointer hover:bg-slate-200">
              {item.title}
              
            </div>
          )
        })}
         </div>
         {/* CALL TO ACTION BUTTONS GOES HERE */}
         <div className="flex flex-col justify-center items-center gap-y-4 my-4 p-2">
            <div className="h-14 w-28">
             <Button content="LOG IN" bg_color="bg-blue-500" txt_color="text-white" />
            </div>
            <div className="h-14 w-auto">
             <Button content="GET STARTED" bg_color="bg-cyan-100" txt_color="text-slate-600" />
            </div>
         </div>
         
         </div>
         {/* DARK SIDE OF NAVBAR */}
         <div className="w-1/3 bg-black opacity-70 h-full"></div>

         </div>

    </BaseLayout>
      
  )
}

export default Navbar