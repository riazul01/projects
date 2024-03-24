import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

// pages
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;