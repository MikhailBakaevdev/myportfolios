import React, { Component } from 'react';
import Contact from './componentsContact/Contact';
import styles from './contactstyles.css';

class Contactme extends Component{
    render () {
        return  <div className={styles.example}>
                    <Contact/>
                </div>
    }
}

export default Contactme