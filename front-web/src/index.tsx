import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import './index.css';
import Filter from 'components/filter';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Filter />
  </React.StrictMode>,
  document.getElementById('root')
);
