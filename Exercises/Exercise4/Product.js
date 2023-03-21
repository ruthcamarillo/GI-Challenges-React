import React from 'react';
import './styles.css';

export default function Product(props) {
    return (
        <article className="product">
            <h2>{props.title}</h2>
            <p className="price">${props.price}</p>
            <p>{props.description}</p>
        </article>
    );
}

//because of being able to use props, inside this product component function we can send the data to output like how we have up there^