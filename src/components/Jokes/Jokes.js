import React from 'react';
import "./Jokes.css"

const Jokes = props => {
    return (
        <div>
            <p>{props.value}</p>
        </div>
    );
};

export default Jokes;