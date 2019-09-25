import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const lakeList = [
  { id: 1, trailhead: 'Echo Lake', name: 'Echo Lake' },
  { id: 2, trailhead: "Wright's Lake Lake", name: 'Maud Lake' },
  { id: 3, trailhead: 'Bayview', name: 'Cascade Lake' }
];

ReactDOM.render(<App lakes={lakeList} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
