import React from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="app__nav">
        <div className="app__nav-logo">
          <img src={images.logo} alt="logo" />
        </div>
        <ul className="app__nav-link">
          {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        
        <div className="app_nav-menu">

        </div>

        </nav>
    )
}

export default Navbar