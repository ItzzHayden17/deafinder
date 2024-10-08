import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Favorite from './pages/Favorite';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/favorite' element={<Favorite/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorkerRegistration.register();