import React, { useState, useEffect, useContext } from 'react';
import AppLayout from '../layouts/AppLayout';
import Header from '../components/Header';
import AddProject from './AddProject';
import ProjectCard from '../components/ProjectCard';
import { ProjectsContext } from '../context/ProjectsContextProvider';

// handle fallbacks
const Fallbacks = ({loading, searchText, projects}) => {
    let fallbackElem = null;

    if (searchText !== '' && projects.length === 0) {
        fallbackElem = <p className="py-[2rem] text-[1.2rem]">No items found!</p>;
    } else if (loading) {
        fallbackElem = <p className="py-[2rem] text-[1.2rem]">Please wait...</p>;
    } else if (!loading && projects.length === 0) {
        fallbackElem = <p className="py-[2rem] text-[1.2rem]">Something Wrong!</p>;
    }

    return fallbackElem;
}

const Home = () => {
    const {projects, loading} = useContext(ProjectsContext);
    const [searchText, setSearchText] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body');
        if (showForm) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }, [showForm]);

    useEffect(() => {
        // searching
        const filteredData = projects.filter((project) => {
            let mainTxt = ''.concat(project.title).replace(/[^a-zA-Z0-9@]/g, '').toLowerCase();
            let srchTxt = searchText.replace(/[^a-zA-Z0-9@]/g, '').toLowerCase();
            if (mainTxt.includes(srchTxt)) return project;
            return null;
        });

        setFilteredItems(filteredData);
    }, [projects, searchText]);

    return (
        <AppLayout>
            <Header searchText={searchText} setSearchText={setSearchText} setShowForm={setShowForm}/>
            {showForm && <AddProject setShowForm={setShowForm}/>}

            <Fallbacks loading={loading} searchText={searchText} projects={filteredItems}/>

            {!loading && <div className="py-[2rem] grid grid-cols-3">
                {filteredItems.map((project, index) => {
                    return <ProjectCard key={project.id} data={project} index={index}/>
                })}
            </div>}
        </AppLayout>
    );
}

export default Home;