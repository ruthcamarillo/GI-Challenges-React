import React from 'react';

import './styles.css';

export default function App() {
    const [counter, setCounter] = React.useState(0);

    function incrementCounterHandler() {
        setCounter(prevCounter => prevCounter + 1);
    }
    // this incrementCounterHandler function is set off by the onClick of the button and it updates the  state by calling the setCounter function with the previous counter value (prevCounter) incremented by 1


    return (
        <div>
            <p id="counter">{counter}</p>
            <button onClick={incrementCounterHandler}>Increment</button>
        </div>
    );
}