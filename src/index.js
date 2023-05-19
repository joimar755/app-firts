import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { Saludar } from './App';
import { Menu } from './Menu';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Menu />
    <Saludar />
  </div>
);



