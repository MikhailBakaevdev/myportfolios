import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Homepage from './Homepage/Homepage';
import Aboutme from './about/Aboutme';
import Works from './Works/Works';
import Contactme from './Contactme/Contactme';
import style from './navbar.css'



function App () {
      return (
          <div className={style.navBar}>
            <Nav/>
            <Aboutme/>
            <Homepage/>
            <Works/>
            <Contactme/>
          </div>
    
      );
}

export default App ;