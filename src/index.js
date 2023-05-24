import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
//import { Saludar } from './App';
import { Menu } from './Menu';
//import { CardsEnd } from './CardsEnd';
import { App } from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Menu />
    <App />
  </div>
);



