import React from 'react';

export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);

    function clickHandler() {
        setHighlighted(isHighlighted => !isHighlighted);
    }

    return (
        <div>
            <p className={highlighted ? 'active' : ''}>Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}

//example of using CSS class dynamically - instead of an inline style.

//highlighted state changes whenever the <button> is clicked

//className prop set tp 'active' string, based on the value of highlighted