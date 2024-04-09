import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import ProjectDetails from './pages/ProjectDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/details/:id" element={<ProjectDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;