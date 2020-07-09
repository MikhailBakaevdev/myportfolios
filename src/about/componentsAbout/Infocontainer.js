import React from 'react';
import style from './cont.css';



function Container (props) {
    return  <div className={style.elem}>
            {props.text}
            </div>
}
export default Container