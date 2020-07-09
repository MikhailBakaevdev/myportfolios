import React, { Component } from 'react';
import Container  from './componentsAbout/Infocontainer';
import  './about.css';



class Aboutme extends Component {
    render () {
        return   <div className="about">
                    <Container text="hello"/>
                    <Container text="thanks"/>
                 </div>
    }
}



export default Aboutme