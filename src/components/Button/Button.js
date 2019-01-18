import React from 'react';
import './Button.css'

const Button = props => {
    return (
        <div className="Button">
            <button className="Refresh" onClick={props.onClick}>Refresh</button>
        </div>
    );
};

export default Button;