import React from 'react';
import tabIcon from '../src/images/tabIcon.svg';
import style from './navbar.css';


function Nav () {
    return (
            <nav>
                <img src={tabIcon} className={style.iconLogo}/>
                <ul>
                    <li>Home page</li>
                    <li>About</li>
                    <li>Works</li>
                    <li>Contact</li>
                </ul>
            </nav>
    );
}

export default Nav