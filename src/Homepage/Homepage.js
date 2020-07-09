import React, { Component } from 'react';
import Image from './componentsHome/image/Image';
import Info from './componentsHome/info/Info';
import styles from './componentsHome/main.css';



class Homepage extends Component {
    render() {
      return <div className={styles.main}>
          <Image/>
          <Info/>
      </div>
    }
}

export default Homepage