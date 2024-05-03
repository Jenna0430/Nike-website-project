import React from 'react'
import { SiNike } from "react-icons/si";
import { RiSearchLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { SiJordan } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import "./nav.css";


const Nav = () => {
  return (
    <div className='navigation'>
         <div className="container">
            <div className="nav-icons flex">

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

        <div className="container-2">

          <div className="nav-1">
           <div className="nav-1-content flex">

              <div className="nav-1-icon">
                <button><a href=""><SiJordan /></a></button>
                <button><a href=""><AiFillStar /></a></button>
              </div>

              <div className="nav-1-text text2">
                <ul>
                  <li><a href="">Find a store</a><span>|</span></li>
                  <li><a href="">Help</a><span>|</span></li>
                  <li><a href="">Join Us</a><span>|</span></li>
                  <li><a href="">Sign In</a></li>
                </ul>
              </div>
           </div>
          </div>

             
          <div className="nav-2">
              <div className="nav-2-content flex">

                        <div className="logo">
                          <SiNike/>
                        </div>

                          <div className="nav-2-text text">
                            <span>New & Featured</span>
                            <span>Men</span>
                            <span id='show1'>Women</span>
                            <span className='show2'>Kids</span>
                            <span className='show2'>Sale</span>
                            <span id='show3'>Jordan</span>
                          </div>

                          <div className="nav-2-icons flex">
                              <div className="nav-search">
                                <input type="text" placeholder='Search'/>
                                <RiSearchLine id='icon'/>
                              </div>
                            
                              <div className="nav-others flex">
                                <button><a href=""><AiOutlineHeart/></a></button>
                                <button><a href=""><BsBag/></a></button>
                              </div>
                          </div>
              </div>
          </div>

        </div>

    </div>
  )
}

export default Nav