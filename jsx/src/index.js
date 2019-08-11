//Import react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    return <div>Hi there!</div>
};

// Take react component and put it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);