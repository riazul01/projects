import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// context
import ProjectUploadContextProvider from './context/ProjectUploadContextProvider.jsx';
import ProjectsContextProvider from './context/ProjectsContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProjectUploadContextProvider>
      <ProjectsContextProvider>
        <App />
      </ProjectsContextProvider>
    </ProjectUploadContextProvider>
  </React.StrictMode>,
);