import React, { useState, useEffect, useContext } from 'react';
import AppLayout from '../layouts/AppLayout';
import Header from '../components/Header';
import AddProject from './AddProject';
import ProjectCard from '../components/ProjectCard';
import { ProjectsContext } from '../context/ProjectsContextProvider';

const Home = () => {
    const {projects, loading} = useContext(ProjectsContext);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body');
        if (showForm) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }, [showForm]);

    return (
        <AppLayout>
            <Header setShowForm={setShowForm}/>
            {showForm && <AddProject setShowForm={setShowForm}/>}

            {!loading && <div className="py-[2rem] grid grid-cols-3">
                {projects.map((project, index) => {
                    return <ProjectCard key={project.id} data={project} index={index}/>
                })}
            </div>}
        </AppLayout>
    );
}

export default Home;