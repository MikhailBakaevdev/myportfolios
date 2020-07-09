import React, { Component } from 'react';
import Container  from './componentsAbout/Infocontainer';
import styles from './about.css';



class Aboutme extends Component {
    render () {
        return   <span className={styles.about}>
                    <Container text="hello"/>
                    <Container text="thanks"/>
                 </span>
    }
}



export default Aboutme