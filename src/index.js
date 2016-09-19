import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routes';
import Marked from './Marked';
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/github.css'


ReactDOM.render(<Routers />, document.getElementById('app'));
