import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [toggle,setToggle]=useState(false)
  const [ind,setInd]=useState(null)

 
  return (
    <nav className="w-full z-10 flex fixed top-0 left-0 paddingX backdrop-blur-2xl py-6 justify-between items-center">
         <img src={logo} width={"124px"} height={"32px"} alt="hoobank" />
         <ul className="list-none  gap-10 sm:flex justify-end items-center hidden flex-1">
              {navLinks.map((link,index)=>(

                  <li onClick={()=>setInd(index)} key={link.id} className={`font-poppins ${index===ind?'text-secondary':'text-white'} font-normal cursor-pointer hover: text-[16px]`}>
                    <a href={link.id}>{link.title}</a>
                  </li>
              ))}
         </ul>

         <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
              <img src={toggle?close:menu} alt="humbeger"
               className="w-[28px] h-[28px] object-contain"
               onClick={()=>setToggle((prev)=>!prev)} />

               <div
                className={`${toggle? 'flex':'hidden'} p-6 bg-black-gradient
                 absolute top-20 right-0 mx-4 my-2 rounded-xl min-w-[140px] sidebar`}
               >
                    <ul className="list-none  gap-10 flex justify-end items-center flex-col flex-1">
                          {navLinks.map((link)=>(
                              <li key={link.id} className="font-poppins font-normal hover:text-secondary cursor-pointer text-[16px] text-white">
                                <a href={link.id}>{link.title}</a>
                              </li>
                          ))}
                    </ul>
               </div>
         </div>
    </nav>
  )
}

export default Navbar
