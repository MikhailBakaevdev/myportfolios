import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


function Nav () {
    return (
            <nav>
                <h1>MB</h1>
                <ul>
                    <Link style={{textDecoration: 'none'}} to="/">
                        <li>Home page</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to="/about">
                        <li>About</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to="/works">
                        <li>Works</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to="/contact">
                        <li>Contact</li>
                    </Link>    
                </ul>
            </nav>
    );
}

export default Nav