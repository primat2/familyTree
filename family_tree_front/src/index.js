import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  </div>
);

