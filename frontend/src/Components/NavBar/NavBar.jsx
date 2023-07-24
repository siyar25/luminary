import "./NavBar.css"
import Logo from '../../assets/luminary_nobg.png'
import searchIcon from '../../assets/search-icon.png'
import { Link, NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <>
    <nav className='navbar'>
      <img className='logo' src={Logo} onClick={()=>navigate("/")}/>
      <ul className="nav-elements">
        <li className="nav-element nav-point"><NavLink to={"/"}>Home</NavLink></li>
        <li className="nav-element nav-point"><NavLink to={"/schedule"}>Schedule</NavLink></li>
        <li className="nav-element nav-point"><NavLink to={"/news"}>News</NavLink></li>
        <li className="nav-element nav-point"><NavLink to={"/aboutus"}>About Us</NavLink></li>
        <li className="nav-element" id='sign-in-btn'>Sign In</li>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}
