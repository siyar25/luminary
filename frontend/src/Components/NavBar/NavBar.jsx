import "./NavBar.css"
import Logo from '../../assets/luminary_nobg.png'
import searchIcon from '../../assets/search-icon.png'
import { Link, NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom'
import LoginModal from "../LoginModal/LoginModal";

export default function NavBar() {
  const navigate = useNavigate();

  function openLogin() {
    const loginModal = document.getElementById("login-modal");
    loginModal.showModal();
  }

  return (
    <>
    <nav className='navbar'>
      <img className='logo' src={Logo} onClick={()=>navigate("/")} tabIndex={0} alt="Logo of Luminary"/>
      <ul className="nav-elements">
        <li className="nav-element nav-point"><NavLink to={"/"}>Home</NavLink></li>
        <li className="nav-element nav-point"><NavLink to={"/schedule"}>Schedule</NavLink></li>
        <li className="nav-element nav-point"><NavLink to={"/news"}>News</NavLink></li>
        <li className="nav-element nav-point"><NavLink to={"/aboutus"}>About Us</NavLink></li>
        <li className="nav-element sign-in-btn" tabIndex={0} onClick={() => openLogin()}>Login</li>
      </ul>
    </nav>
    <LoginModal />
    <Outlet/>
    </>
  )
}
