import React, { Component } from 'react';
import Container  from './componentsAbout/Infocontainer';
import  './about.css';


const someInfo = 'Some info about me';

const educationAndPersonalinfo = 'Tell us about your age,hobby,efucation.-OK. ' +
'I am 22,have a medium Technical degree - radioengineer.Hmm...hobby'  + 
'I like sport(a bit),watch movies,eating..who is don`t like eating?!' + 
'I started self-learn about 1+ year ago and now my goal for this month - find a job. ' +
'For this year i am read a lot of literature about IT world and technologies. ' +
'Graduated two courses by DataArt and Digital Ligue' ;

class Aboutme extends Component {
    render () {
        return   <div className="about">
                        <div className="about-info">
                            <Container text={someInfo}/>
                            <Container text={educationAndPersonalinfo}/>
                        </div>
                    <div className="about-skills"> 
                        <Container text=""/>
                    </div>
                    
                 </div>
    }
}



export default Aboutme