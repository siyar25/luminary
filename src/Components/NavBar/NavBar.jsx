import React from 'react'
import "./NavBar.css"

export default function NavBar() {
  return (
    <nav className='navbar'>
      <div>Logo</div>
      <ul className="nav-elements">
        <li className="nav-element">Home</li>
        <li className="nav-element">Schedule</li>
        <li className="nav-element">Movies</li>
        <li className="nav-element">News</li>
        <li className="nav-element" style={{fontSize:"1.5rem"}}>🔍</li>
        <li className="nav-element" id='sign-in-btn'>Sign In</li>
      </ul>
    </nav>
  )
}
