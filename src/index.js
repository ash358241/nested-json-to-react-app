import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as ReactDOMServer from 'react-dom/server';
import {styleArr}  from './utils/styleGenerator';

console.log('All the html tags: \n', ReactDOMServer.renderToString(<App/>))
console.log('\n')
console.log('All the styles: \n', styleArr.toString())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
