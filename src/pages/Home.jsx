import React, { useState, useEffect, useContext, useRef } from 'react';
import AppLayout from '../layouts/AppLayout';
import Header from '../components/Header';
import AddProject from './AddProject';
import ProjectCard from '../components/ProjectCard';
import { ProjectsContext } from '../context/ProjectsContextProvider';
import Pagination from '../components/Pagination';

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
    const [sortType, setSortType] = useState('bigger');
    const [filteredItems, setFilteredItems] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const startRef = useRef(0);
    const endRef = useRef(0);

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

        // sorting
        if (sortType === 'ascending') {
            filteredData.sort((a, b) => {
                let x = a.title.toLowerCase();
                let y = b.title.toLowerCase();
                if (x < y) return -1;
                if (x > y) return 1;
                return 0;
            });
        } else if (sortType === 'descending') {
            filteredData.sort((a, b) => {
                let x = a.title.toLowerCase();
                let y = b.title.toLowerCase();
                if (x < y) return 1;
                if (x > y) return -1;
                return 0;
            });
        } else if (sortType === 'bigger') {
            filteredData.sort((a, b) => {
                let x = parseInt(a.size);
                let y = parseInt(b.size);
                if (x < y) return 1;
                if (x > y) return -1;
                return 0;
            });
        } else if (sortType === 'smaller') {
            filteredData.sort((a, b) => {
                let x = parseInt(a.size);
                let y = parseInt(b.size);
                if (x < y) return -1;
                if (x > y) return 1;
                return 0;
            });
        }

        setFilteredItems(filteredData);
    }, [projects, searchText, sortType]);

    startRef.current = (currentPage - 1) * limit;
    endRef.current = ((currentPage - 1) * limit) + limit;

    return (
        <AppLayout>
            <Header searchText={searchText} setSearchText={setSearchText} sortType={sortType} setSortType={setSortType} setShowForm={setShowForm}/>
            {showForm && <AddProject setShowForm={setShowForm}/>}

            <Fallbacks loading={loading} searchText={searchText} projects={filteredItems}/>

            {!loading && <div className="py-[2rem] grid grid-cols-3">
                {filteredItems.slice(startRef.current, endRef.current).map((project, index) => {
                    return <ProjectCard key={project.id} data={project} index={index}/>
                })}
            </div>}

            {<Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limit} setLimit={setLimit} totalPages={Math.ceil(filteredItems.length / limit)}/>}
        </AppLayout>
    );
}

export default Home;