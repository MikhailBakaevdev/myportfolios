import React, { Component } from 'react';
import Image from './componentsHome/image/Image';
import Info from './componentsHome/info/Info';
import './componentsHome/main.css';



class Homepage extends Component {
    render() {
      return <div className="main">
                <Image/>
                <Info className="mainText" text="jwofjwomfrejimreijhnge"/>
                
              </div>
    }
}

export default Homepage