import React from 'react';

import './styles.css';

export default function App() {
    function Connect() {
        console.log('Stored!')
    }
    return <button onClick={Connect}> Bookmark</button>;
}

//click even listener is what we added when we added in the onClick, we called the function to console log the 'Stored' when we clicked on the button that has that function stored to call it