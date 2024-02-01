import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isMobile,setIsMobile]=useState<boolean>(false)
  return (
    <div className='navbar'>
      <h1 className='logo'>LOGO</h1>
      <ul className={isMobile?'nav-links-mobile':'nav-links'} onClick={()=>setIsMobile(false)}>
       <Link to={'/home'} className='home'><li>Home</li></Link> 
       <Link to={'/about'} className='about'><li>About</li></Link> 
       <Link to={'/product'} className='product'><li>Product</li></Link> 
       <Link to={'/contact'} className='contact'><li>Contact</li></Link> 
       <Link to={'#'} className='tolly'>
        <li className='tolly'>
            <i className="fa fa-shopping-cart" aria-hidden="true">
             
            </i>
            <div className='circle'>2</div>
        </li>
        </Link>
        <Link to={'/sign-up'} className='signup'><li>Sign Up</li></Link> 
      </ul>
      <button className='mobile-menu-icon' onClick={()=>setIsMobile(!isMobile)}>{isMobile?<i className="fa fa-times" aria-hidden="true"></i>
:<i className="fa fa-align-justify" aria-hidden="true"></i>}</button>
    </div>
  )
}

export default NavBar
