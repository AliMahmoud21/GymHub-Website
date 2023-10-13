import { useState } from 'react';
import logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';


const Header = () => {
  const [navbar, setNavbar] = useState(false)

  const showNavbar = () => {
    setNavbar(true);
  }

  const closeNavbar = () => {
    setNavbar(false);
  }

  return (
    <header>
      <img src={logo} className='logo' alt="logo" />

      <FaBars
        className='bars-menu'
        onClick={showNavbar}
        style={{ display: navbar ? 'none' : 'block' }}
      />

      <FaTimes
        className='bars-menu'
        onClick={closeNavbar}
        style={{ display: navbar ? 'block' : 'none' }}
      />

      <ul className={`header-menu ${navbar ? 'show' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#whyUs">Why Us</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
    </header>
  )
}

export default Header
