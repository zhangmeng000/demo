import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routes';
import Marked from './Marked';
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/github.css'
import Echarts from './Echarts'
import Echarts1 from './Echarts1'
import MaterialUi from './MaterialUi'

ReactDOM.render(<MaterialUi />, document.getElementById('app'));
