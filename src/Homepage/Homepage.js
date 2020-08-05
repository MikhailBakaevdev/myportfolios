import React, { Component } from 'react';
import Image from './componentsHome/image/Image';
import Info from './componentsHome/info/Info';
import './componentsHome/main.css';


const textHomePage = 'Hi there,it`s me Mike and i am ' +
'Front-end Developer.You`re welcome to my website-Single Page Application. '+
'Take your time and be optimist!';



class Homepage extends Component {
    render() {
      return <div className="main">
                <Image/>
                <Info className="mainText" text={textHomePage}/>
                
              </div>
    }
}

export default Homepage