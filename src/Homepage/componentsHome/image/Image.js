import React from 'react';
import styles from './image.css';
import myimage from './myImage.svg';




function Image () {
    return <div className={styles.mainImage}>
                <img scr={myimage} alt="something" className={styles.img}/>
            </div>
}

export default Image