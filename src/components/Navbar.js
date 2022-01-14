import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <Link to="/">
                    <div className='cocktail-text'>The cocktail hub</div>
                </Link>
                <ul className='nav-links'>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar
