import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className='navbar'>
      <a className='navbar-brand text-warning  fw-bolder' href='/home'>Travel</a>
      <button
        className='navbar-toggler'
        type='button'
        onClick={toggleMenu}
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div
        className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`}
        id='offcanvasNavbar'
        aria-labelledby='offcanvasNavbarLabel'
      >
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>Navbar</h5>
          <button type='button' className='btn-close' onClick={toggleMenu} aria-label='Close'></button>
        </div>
        <div className='offcanvas-body'>
          <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
            <ul className='navbar-nav'>
              <li className='nav-item' onClick={toggleMenu}>
                <NavLink
                  to={'/login'}
                  className='nav-link'
                >
                  Log In
                </NavLink>
              </li>
              <li className='nav-item' onClick={toggleMenu}>
                <NavLink
                  to={'/register'}
                  className='nav-link'
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;