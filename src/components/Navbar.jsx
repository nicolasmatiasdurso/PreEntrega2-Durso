import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Logo from './Logo';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="logo" onClick={closeMenu}><Logo/></Link>
            <div className="toggle-button" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`menu ${showMenu ? 'show' : ''}`}>
                <li><Link className="menu-link" to="/" onClick={closeMenu}>Inicio</Link></li>
                <li><Link className="menu-link" to="/productos" onClick={closeMenu}>Productos</Link></li>
                <li><Link className="menu-link" to="/productos/Paletas" onClick={closeMenu}>Paletas</Link></li>
                <li><Link className="menu-link" to="/productos/Zapatillas" onClick={closeMenu}>Zapatillas</Link></li>
                <li><Link className="menu-link" to="/productos/Mochilas" onClick={closeMenu}>Mochilas</Link></li>
            </ul>
            <div className="card-widget">
                <CartWidget />
            </div>
        </nav>
    );
};

export default Navbar;
