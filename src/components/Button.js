import React from 'react';

const Button = props => {
    return (
        <button type="button" onClick={props.onClick}/>
        // put fontawesome icon for the button itself
    );
};

export default Button;
