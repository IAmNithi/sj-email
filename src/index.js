import React from 'react';
import ReactDOM from 'react-dom';
// Normalize CSS
import 'normalize-css';
// Bulma CSS
import './assets/sass/bulma.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
