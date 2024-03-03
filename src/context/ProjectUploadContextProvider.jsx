import React, { useState, createContext } from 'react';

export const ProjectUploadContext = createContext();

const ProjectUploadContextProvider = ({ children }) => {
    const [projectData, setProjectData] = useState(null);
    console.log(projectData);
    return (
        <ProjectUploadContext.Provider value={{setProjectData}}>
            {children}
        </ProjectUploadContext.Provider>
    );
}

export default ProjectUploadContextProvider;