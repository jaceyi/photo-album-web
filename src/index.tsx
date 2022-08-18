import 'react-alert-confirm/dist/index.css';
import './base.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as config from './config.json';
import './utils/firebase';

console.log(`version: ${config.version}`);

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);