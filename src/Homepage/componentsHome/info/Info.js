import React  from 'react';
import './info.css';



function Info (props) {
    return <div className="mainText">
            {props.text}
            </div>
}


export default Info