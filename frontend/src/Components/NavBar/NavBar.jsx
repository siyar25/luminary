import "./NavBar.css"
import Logo from '../../assets/luminary_nobg.png'
import searchIcon from '../../assets/search-icon.png'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <>
    <nav className='navbar'>
      <img className='logo' src={Logo} onClick={()=>navigate("/")}/>
      <ul className="nav-elements">
        <li className="nav-element nav-point"><Link to={"/"}>Home</Link></li>
        <li className="nav-element nav-point"><Link to={"/schedule"}>Schedule</Link></li>
        <li className="nav-element nav-point"><Link to={"/news"}>News</Link></li>
        <li className="nav-element nav-point"><Link to={"/aboutus"}>About Us</Link></li>
        <li className="nav-element" id='sign-in-btn'>Sign In</li>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}
