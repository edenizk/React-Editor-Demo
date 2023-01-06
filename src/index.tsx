import React from 'react';
import ReactDOM from 'react-dom/client';
import '@styles/main.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from 'src/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes/>
    </Router>
  </React.StrictMode>
);
