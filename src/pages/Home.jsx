import React, { useState } from 'react';
import AppLayout from '../layouts/AppLayout';
import Header from '../components/Header';
import AddProject from './AddProject';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <AppLayout>
            <Header setShowForm={setShowForm}/>
            {showForm && <AddProject setShowForm={setShowForm}/>}

            <div className="py-[2rem] grid grid-cols-3">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </AppLayout>
    );
}

export default Home;