import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ProjectUploadContextProvider from './context/ProjectUploadContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProjectUploadContextProvider>
      <App />
    </ProjectUploadContextProvider>
  </React.StrictMode>,
);