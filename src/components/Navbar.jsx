import { NavItems } from "../mock-data" 
import { BaseLayout } from "../layouts"
import Logo from "../assets/img2.png"
import Button from "./Button"
import { HiMenuAlt3 } from "react-icons/hi"

const Navbar = () => {
   
  return (
    <BaseLayout>
       {/* NAV MAIN LAYOUT */}
       <div className="flex py-2 justify-between items-center">

         {/* LOGO GOES HERE */}
         <div>
            <img src={Logo} alt="asiiko_logo" className="w-25 h-8 lg:w-30 lg:h-10 object-contain"/>
         </div>

         {/* NAV ITEMS FOR LARGE SCREENS GOES HERE */}
         <div className="hidden lg:flex gap-x-8">
            {NavItems.map((item) => {
         return (
            <div key={item.id} className="font-medium">
              {item.title}
            </div>
        )
       })}
         </div>

         {/* CALL TO ACTION BUTTONS GOES HERE */}
         <div className="hidden lg:flex gap-x-5">
           <div className="h-12 w-32 ">
            <Button content="LOG IN" bg_color="bg-blue-500" txt_color="text-white" />
           </div>
           <div className="h-12 w-32">
           <Button content="GET STARTED" bg_color="bg-cyan-100" txt_color="text-slate-600" />
           </div>
         </div>

         {/* HAMBURGER ICONS */}
         <div className="block lg:hidden cursor-pointer">
            <HiMenuAlt3 size={35}/>
         </div>

       </div>
    </BaseLayout>
      
  )
}

export default Navbar