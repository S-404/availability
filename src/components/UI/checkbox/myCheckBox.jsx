import React from 'react';
import classes from "./myCheckBox.module.css";

const MyCheckBox = ({text, id, ...props}) => {
    return (
        <div className={classes.myCheckBox}>
            <input type="checkbox" id={id} className={classes.myCheckBox__button} {...props}/>
            <label
                htmlFor={id}
                className={classes.myCheckBox__label}
            >
                {text}
            </label>
        </div>
    );
};

export default MyCheckBox;