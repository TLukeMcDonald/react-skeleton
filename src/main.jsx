/* eslint-env browser */
import React    from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';

import App from './components/App';

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'));
