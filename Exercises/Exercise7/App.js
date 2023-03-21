import React from 'react';

import './styles.css';


export default function App() {
    const [messageValidity, setMessageValidity] = React.useState('Invalid');

    function messageChangeHandler(event) {
        const value = event.target.value;
        if (value.trim().length < 3) {
            setMessageValidity('Invalid')
        } else {
            setMessageValidity('Valid');
        }
    }
    //set to 'Invalid' using the useState hook, The state is then updated based on input by calling the setMessageValidity function in the messageChangeHandler function


    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={messageChangeHandler} />
            <p>{messageValidity} message</p>
        </form>
    );
}
//messageChangeHandler function is set off by the onChange event and it checks the length of whast been input, If the length is less than 3, the messageValidity is set to 'Invalid', otherwise, it is set to 'Valid'.