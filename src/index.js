import React from 'react';
import App from './app.jsx';
import ReactDOM from 'react-dom';
import './assets/styles/style.scss';

function component() {
    var element = document.createElement('div');
    element.setAttribute('id', 'app');
    return element;
}

document.body.appendChild(component());

ReactDOM.render(<App />, document.getElementById('app'));