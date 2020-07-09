import React  from 'react';
import styles from './info.css';



function Info (props) {
    return <div className={styles.mainText}>
            {props.text}
            </div>
}


export default Info