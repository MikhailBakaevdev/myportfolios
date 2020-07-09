import React, { Component } from 'react';
import Example from './componentsWorks/Example';
import styles from './work.css';

class Works extends Component {
    render () {
        return  <div className={styles.example}>
                    <Example/>
                </div>
    }
}

export default Works