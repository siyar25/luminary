import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'

export default function MainScreen() {
  return (
    <div className='container'>
        <NavBar/>
        <div className="movie-bg" style={{backgroundColor:"black"}}>BG</div>
    </div>
  )
}
