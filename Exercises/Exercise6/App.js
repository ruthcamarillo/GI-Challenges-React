import React, { useState } from 'react';

import './styles.css';

export default function App() {


    const [price, setPrice] = useState(100);

    function priceChange() {
        setPrice('75');

    };

    return (
        <div>
            <p>${price}</p>
            <button onClick={priceChange}>Apply Discount</button>
        </div>
    );
}
// by calling the funciton price chnage when you click the onclick button, the results consoled is set to 75