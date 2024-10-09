import React from 'react';
// import "./button.scss";
import styles from './button.module.css'

const Button = (props) => {
    return (
        <button className={styles.button}>
            {props.children}
        </button>
    );
};

export default Button;