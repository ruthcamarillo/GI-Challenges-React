import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);

    function clickHandler() {
        setHighlighted(isHighlighted => !isHighlighted);
    }

    return (
        <div>
            <p style={{ color: highlighted ? 'red' : 'white' }}>Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}
// component has a state highlighted that is initially set to false using the useState, The state is then updated based on the user input by calling the setHighlighted function in the clickHandler function