import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = () => {
    return (
        <div className="h-[320px] w-full flex flex-col items-center justify-center bg-[#111] border-[1px] border-[#000] rounded-[1.2rem] overflow-hidden">
            <Link to="/" className="relative w-full h-[80%] overflow-hidden">
                <img className="h-full w-full object-cover transform hover:scale-125 transition-all duration-300 ease-in-out" src="https://images.unsplash.com/photo-1709625862404-c363220c3823?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="project-thumb" />
                <div className="absolute bottom-[0.8rem] left-[1rem] flex items-center gap-[0.2rem] tags">
                    <span className="px-[0.6rem] py-[0.2rem] text-[0.9rem] font-[500] rounded-[1.2rem] html">html</span>
                    <span className="px-[0.6rem] py-[0.2rem] text-[0.9rem] font-[500] rounded-[1.2rem] css">css</span>
                    <span className="px-[0.6rem] py-[0.2rem] text-[0.9rem] font-[500] rounded-[1.2rem] javascript">javascript</span>
                </div>
            </Link>
            <div className="relative w-full h-[20%] flex items-center">
                <a href="#null" className="project-title ps-[1rem] text-[1.1rem] font-[500]">Shopping Cart System</a>
                <FaExternalLinkAlt className="icon-link text-[1.1rem] absolute top-[50%] right-[1rem] translate-y-[-50%] opacity-0 invisible pointer-events-none transition-all duration-300 ease-in-out"/>
            </div>
        </div>
    );
}

export default ProjectCard;