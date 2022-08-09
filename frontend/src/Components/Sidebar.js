import React from 'react'
import {SidebarData} from '../data/SidebarData'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
   // const activeLink = 'hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-red-500'
   // const normalLink = 'hover:bg-red-500 pl-7 mt-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold'

  return (
    <>
    <section style={{}}>
      <div className="text-white"  style={{}}>
          {
               SidebarData.map((item, index)=>{
                return(
                    <div key={index} >
                        <NavLink to={item.path}>
                        <span style={{"color":"white", "fontSize":"o.6rem", "padding":"4px", "text-decoration": "underline #fff dotted","lineHeight":"2rem","text-underline-offset": "10px" }}><b>{item.title}</b></span>
                        </NavLink>
                        
                    </div>
                )
              })
          }
  
      </div>
    </section>
  </>
  )
}

export default Sidebar