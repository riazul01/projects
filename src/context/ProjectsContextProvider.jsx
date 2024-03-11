import React, { useState, useEffect, createContext } from 'react';

import { fs } from '../firebase';
import { collection, query, onSnapshot } from "firebase/firestore";

const ProjectsContext = createContext();

const ProjectsContextProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(fs, "projects"));
        onSnapshot(q, (querySnapshot) => {
            const allProjects = [];
            querySnapshot.forEach((doc) => {
                allProjects.push({...doc.data(), id: doc.id});
            });
            setProjects(allProjects);
            setLoading(false);
        });
    }, []);

    return (
        <ProjectsContext.Provider value={{projects, loading}}>
            {children}
        </ProjectsContext.Provider>
    );
}

export default ProjectsContextProvider;