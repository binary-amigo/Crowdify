import React, { useState } from 'react';
import './Navbar.css'; // You can create a separate CSS file for styling

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState('home');

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
    // You can add additional logic here for handling the click event, such as navigating to a different page.
  };

  return (
   
    <nav className="navbar ">
      <ul>
        <li className={activeNavItem === 'home' ? 'active' : ''} onClick={() => handleNavItemClick('home')}>
          Home
        </li>
        <li className={activeNavItem === 'about' ? 'active' : ''} onClick={() => handleNavItemClick('about')}>
          About
        </li>
        <li className={activeNavItem === 'services' ? 'active' : ''} onClick={() => handleNavItemClick('services')}>
          Services
        </li>
        <li className={activeNavItem === 'contact' ? 'active' : ''} onClick={() => handleNavItemClick('contact')}>
          Contact
        </li>
      </ul>
    </nav>
   
  );
};

export default Navbar;
