import React from 'react';

import './styles.css';

export default function App() {
    const clickHandler = () => {
        console.log('Clicked!');
    };

    return (
        <div>
            <h2>You're logged in!</h2>
            <p>Welcome to your user profile!</p>
            <button onClick={clickHandler}>Click me!</button>
        </div>
    );
}

//in this exercise we just worked on getting syntax right, the divs should be lowercae and we have to uppercase some letters like onClick
