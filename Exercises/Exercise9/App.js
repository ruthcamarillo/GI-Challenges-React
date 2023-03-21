import React from 'react';

import Todo from './Todo';
//comes from Todo.js file
import './styles.css';

const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];
//Todo has access to these props, they give us a way to structure

export default function App() {
    return (
        <ul>
            {DUMMY_TODOS.map(todo => <Todo text={todo} />)}

        </ul>
    );
}
//the .map() returns a new array of Todo components

//component that renders an unordered list (<ul>) of todo items using the map method on an array of DUMMY_TODOS 
//The DUMMY_TODOS array contains three strings that represent the todo items.