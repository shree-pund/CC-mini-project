import React from 'react';
import Logo from '../../logo.svg'
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={Logo} alt="city tours logo" />
            <ul className="nav-links">
                <li><a className='nav-link' href="http:/" target="_blank" rel="noopener noreferrer">
                    home
                </a></li>
                <li><a className='nav-link' href="http:/" target="_blank" rel="noopener noreferrer">
                    about
                </a></li>
                <li><a className='nav-link active' href="http:/" target="_blank" rel="noopener noreferrer">
                    tours
                </a></li>
            </ul>
        </nav>
    );
}

export default Navbar;