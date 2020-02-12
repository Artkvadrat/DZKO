import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App/App';
require.context = require('require-context');


ReactDOM.render(<App />, document.getElementById('root'));
