import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
      <img src={logo} className='logo' alt="logo" />

      <ul className='header-menu'>
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