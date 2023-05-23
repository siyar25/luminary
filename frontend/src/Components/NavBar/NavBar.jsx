import React from 'react'
import "./NavBar.css"
import Logo from '../../assets/luminary_nobg.png'
import searchIcon from '../../assets/search-icon.png'
import { Outlet } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <nav className='navbar'>
      <img className='logo' src={Logo}/>
      <ul className="nav-elements">
        <li className="nav-element nav-point">Home</li>
        <li className="nav-element nav-point">Schedule</li>
        <li className="nav-element nav-point">Movies</li>
        <li className="nav-element nav-point">News</li>
        <img className="nav-element search-icon" alt='search' src={searchIcon} title='Search for movies'/>
        <li className="nav-element" id='sign-in-btn'>Sign In</li>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}
