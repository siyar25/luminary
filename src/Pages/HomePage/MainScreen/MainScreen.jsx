import React from 'react'
import NavBar from '../../../Components/NavBar/NavBar'
import movieBG from '../../../assets/venom-movie-bg.jpg'
import "./MainScreen.css"

export default function MainScreen() {
  return (
    <div className='container'>
        <NavBar/>
        <img alt='movie-poster' src={movieBG} className='mainscreen-bg' />
    </div>
  )
}
