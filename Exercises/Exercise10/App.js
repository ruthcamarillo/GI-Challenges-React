import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [isDeleting, setIsDeleting] = React.useState(false);

    function deleteHandler() {
        setIsDeleting(true);
    }

    function proceedHandler() {
        setIsDeleting(false);
    }

    let warning;

    if (isDeleting) {
        warning = (
            <div id="alert">
                <h2>Are you sure?</h2>
                <p>These changes can't be reverted!</p>
                <button onClick={proceedHandler}>Proceed</button>
            </div>
        );
    }

    return (
        <div>
            {warning}
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
}

//component has a state isDeleting that is first set to false using the useState, The state is updated based on the user input by calling the setIsDeleting function in the deleteHandler and proceedHandler functions

//both functions set off by the onClick