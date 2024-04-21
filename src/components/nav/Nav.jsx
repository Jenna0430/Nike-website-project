import React from 'react'
import { SiNike } from "react-icons/si";
import { RiSearchLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import "./nav.css";

const Nav = () => {
  return (
    <div className='navigation'>
         <div className="container">
            <div className="nav-icons">

              <div className="logo">
                 <SiNike />
               </div>
              <div className="other-icons">
                <div className="icons">
                  <button><a href=""><RiSearchLine /></a></button>
                  <button><a href=""><BsBag /></a></button>
                  <button><a href=""><RxPerson /></a></button>
                </div>

                <div className="menu">
                  <button><a href=""><AiOutlineMenu /></a></button>
                </div>
              </div>
             
          
            </div>
         </div>


    </div>
  )
}

export default Nav