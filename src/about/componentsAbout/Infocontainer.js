import React from 'react';
import './cont.css';



function Container (props) {
    return  <div className="elem">
            {props.text}
            </div>
}
export default Container