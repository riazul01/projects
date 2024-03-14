import React, { useState, useEffect } from 'react';

// icons
import { HiPlus } from "react-icons/hi";
import { BiSearchAlt } from 'react-icons/bi';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { RiArrowDropLeftLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Header = ({setShowForm}) => {
    const [toggle, setToggle] = useState(false);
    const [activeRightNav, setActiveRightNav] = useState(false);
    const [listCategory, setListCategory] = useState('react');

    useEffect(() => {
        const body = document.querySelector('body');
        body.onclick = () => {
            setToggle(false);
            setTimeout(() => {
                setActiveRightNav(false);
            }, 400);
        }
    });

    const handleNavToggle = (e) => {
        e.stopPropagation();
        setToggle(!toggle);
        setTimeout(() => {
            setActiveRightNav(false);
        }, 400);
    }

    const handleGoToRightNav = (category) => {
        setActiveRightNav(true);
        setListCategory(category);
    }

    const handleBackToLeftNav = () => {
        setActiveRightNav(false);
    }

    return (
        <div className="flex flex-col xl:flex-row items-center justify-between w-full">
            {/* title */}
            <Link to="/" className="text-[#fff] text-[2.2rem] uppercase font-[700] bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 inline-block text-transparent bg-clip-text">Projects.</Link>

            <div className="relative mt-[1rem] xl:mt-0 flex flex-wrap items-center justify-center xl:justify-end gap-[1rem] w-full">
                {/* projects count */}
                <div className="px-[0.8rem] py-[0.55rem] flex items-center gap-[0.2rem] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-lg cursor-pointer">
                    <span className="text-[1.1rem] font-[500]">Items:</span>
                    <span className="text-[1.1rem] font-[500] flex items-center justify-center w-[1.4rem]">{`${2}`.padStart(2, '0')}</span>
                    <span className="text-[1.1rem] font-[500]">/ 20</span>
                </div>

                {/* add project */}
                <div onClick={() => setShowForm(true)} className="px-[0.8rem] py-[0.55rem] flex items-center gap-[0.3rem] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-lg cursor-pointer">
                    <HiPlus className="text-[1.2rem]"/>
                    <span className="text-[1.1rem] font-[500]">Add Project</span>
                </div>

                {/* search projects */}
                <div className="flex items-center justify-center w-full max-w-[400px] rounded-lg overflow-hidden">          
                    <input name="searchText" className="pl-[1rem] text-[1.1rem] text-[#fff] h-[44px] w-[84%] bg-[#000] border-[2px] border-emerald-500 outline-none rounded-l-lg" type="text" placeholder="Search projects..."/>
                    
                    <div className="text-[1.1rem] text-[#fff] flex items-center justify-center h-[44px] w-[16%] bg-gradient-to-r from-emerald-500 to-indigo-500 cursor-pointer rounded-r-lg">
                        <BiSearchAlt className="text-[1.6rem]"/>
                    </div>
                </div>

                {/* sort projects */}
                <div className="flex items-center outline-none rounded-lg overflow-hidden">
                    <p className="px-[0.8rem] flex items-center justify-center h-[44px] text-[1.1rem] font-[500] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">Sort by</p>
                    <select name="sortType" className="px-[0.6rem] h-[44px] text-[#fff] text-[1.1rem] bg-[#000] border-[2px] border-emerald-500 rounded-r-lg outline-none">
                        <option value="ascending">Ascending</option>
                        <option value="decending">Decending</option>
                        <option value="bigger">Bigger</option>
                        <option value="smaller">Smaller</option>
                    </select>
                </div>

                {/* toggle bar */}
                <div onClick={handleNavToggle} className={`toggler ${toggle ? 'active' : null} h-[44px] w-[54px] grid place-items-center cursor-pointer bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-lg`}>
                    <span className="toggleBar"></span>
                </div>

                {/* navigation */}
                <div onClick={(e) => e.stopPropagation()} className={`${toggle ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'} absolute top-[4rem] right-0 w-[260px] h-auto flex items-start justify-start rounded-lg overflow-hidden transition-all ease-in-out duration-300 z-[99999]`} style={toggle ? {transform: 'translateX(0)'} : {transform: 'translateX(2rem)'}}>
                    
                    {/* left nav */}
                    <ul className={`${activeRightNav ? 'pointer-events-none' : 'pointer-events-auto'} list-none h-auto max-h-[400px] min-w-[260px] overflow-y-auto bg-[#222] border-[1px] border-[#000] rounded-lg transition-all ease-in-out duration-300`} style={activeRightNav ? {transform: 'translateX(-100%)'} : {transform: 'translateX(0)'}}>
                        <li onClick={() => handleGoToRightNav('react')} className="ps-[0.8rem] h-[44px] flex items-center justify-between cursor-pointer hover:bg-[#333] transition-all ease-in-out duration-300">
                            <span className="text-[1.1rem] font-[500]">React Projects</span>
                            <RiArrowDropRightLine className="text-[2rem]"/>
                        </li>
                        <li onClick={() => handleGoToRightNav('javascript')} className="ps-[0.8rem] h-[44px] flex items-center justify-between cursor-pointer border-t-[1px] border-[#000] hover:bg-[#333] transition-all ease-in-out duration-300">
                            <span className="text-[1.1rem] font-[500]">JavaScript Projects</span>
                            <RiArrowDropRightLine className="text-[2rem]"/>
                        </li>
                        <li onClick={() => handleGoToRightNav('css')} className="ps-[0.8rem] h-[44px] flex items-center justify-between cursor-pointer border-t-[1px] border-[#000] hover:bg-[#333] transition-all ease-in-out duration-300">
                            <span className="text-[1.1rem] font-[500]">CSS Projects</span>
                            <RiArrowDropRightLine className="text-[2rem]"/>
                        </li>
                    </ul>

                    {/* right nav */}
                    <div className={`navRight ${activeRightNav ? 'activeRight pointer-events-auto' : 'pointer-events-none'} min-w-[260px] max-h-[400px] bg-[#222] border-[1px] border-[#000] rounded-lg overflow-y-auto transition-all ease-in-out duration-300`} style={activeRightNav ? {transform: 'translateX(-100%)'} : {transform: 'translateX(0)'}}>

                        {/* react projects */}
                        <ul className={(listCategory === 'react') ? 'block' : 'hidden'}>
                            <li onClick={handleBackToLeftNav} className="h-[44px] flex items-center justify-start cursor-pointer bg-[#333] border-b-[1px] border-[#000]">
                                <RiArrowDropLeftLine className="text-[2rem]"/>
                                <span className="text-[1.1rem] font-[500]">back</span>
                            </li>
                            <li className="h-[44px] w-full">
                                <a href="#null" className="ps-[0.8rem] text-[1.1rem] font-[500] h-full w-full flex items-center justify-start hover:bg-[#333] transition-all ease-in-out duration-300">Project-01</a>
                            </li>
                            <li className="h-[44px] w-full">
                                <a href="#null" className="ps-[0.8rem] text-[1.1rem] font-[500] h-full w-full flex items-center justify-start hover:bg-[#333] transition-all ease-in-out duration-300">Project-02</a>
                            </li>
                            <li className="h-[44px] w-full">
                                <a href="#null" className="ps-[0.8rem] text-[1.1rem] font-[500] h-full w-full flex items-center justify-start hover:bg-[#333] transition-all ease-in-out duration-300">Project-03</a>
                            </li>
                            <li className="h-[44px] w-full">
                                <a href="#null" className="ps-[0.8rem] text-[1.1rem] font-[500] h-full w-full flex items-center justify-start hover:bg-[#333] transition-all ease-in-out duration-300">Project-04</a>
                            </li>
                            <li className="h-[44px] w-full">
                                <a href="#null" className="ps-[0.8rem] text-[1.1rem] font-[500] h-full w-full flex items-center justify-start hover:bg-[#333] transition-all ease-in-out duration-300">Project-05</a>
                            </li>
                        </ul>

                        {/* javascript projects */}
                        <ul className={(listCategory === 'javascript') ? 'block' : 'hidden'}>
                            <li onClick={handleBackToLeftNav} className="h-[44px] flex items-center justify-start cursor-pointer bg-[#333] border-b-[1px] border-[#000]">
                                <RiArrowDropLeftLine className="text-[2rem]"/>
                                <span className="text-[1.1rem] font-[500]">back</span>
                            </li>
                            <li className="h-[44px] w-full">
                                <a href="#null" className="ps-[0.8rem] text-[1.1rem] font-[500] h-full w-full flex items-center justify-start hover:bg-[#333] transition-all ease-in-out duration-300">JS</a>
                            </li>
                            <li className="h-[44px] w-full">
                                <a href="#null" className="ps-[0.8rem] text-[1.1rem] font-[500] h-full w-full flex items-center justify-start hover:bg-[#333] transition-all ease-in-out duration-300">Project-02</a>
                            </li>
                            <li className="h-[44px] w-full">
                                <a href="#null" className="ps-[0.8rem] text-[1.1rem] font-[500] h-full w-full flex items-center justify-start hover:bg-[#333] transition-all ease-in-out duration-300">Project-03</a>
                            </li>
                            <li className="h-[44px] w-full">
                                <a href="#null" className="ps-[0.8rem] text-[1.1rem] font-[500] h-full w-full flex items-center justify-start hover:bg-[#333] transition-all ease-in-out duration-300">Project-04</a>
                            </li>
                            <li className="h-[44px] w-full">
                                <a href="#null" className="ps-[0.8rem] text-[1.1rem] font-[500] h-full w-full flex items-center justify-start hover:bg-[#333] transition-all ease-in-out duration-300">Project-05</a>
                            </li>
                        </ul>

                        {/* css projects */}
                        <ul className={(listCategory === 'css') ? 'block' : 'hidden'}>
                            <li onClick={handleBackToLeftNav} className="h-[44px] flex items-center justify-start cursor-pointer bg-[#333] border-b-[1px] border-[#000]">
                                <RiArrowDropLeftLine className="text-[2rem]"/>
                                <span className="text-[1.1rem] font-[500]">back</span>
                            </li>
                            <li className="h-[44px] w-full">
                                <a href="#null" className="ps-[0.8rem] text-[1.1rem] font-[500] h-full w-full flex items-center justify-start hover:bg-[#333] transition-all ease-in-out duration-300">CSS</a>
                            </li>
                            <li className="h-[44px] w-full">
                                <a href="#null" className="ps-[0.8rem] text-[1.1rem] font-[500] h-full w-full flex items-center justify-start hover:bg-[#333] transition-all ease-in-out duration-300">Project-02</a>
                            </li>
                            <li className="h-[44px] w-full">
                                <a href="#null" className="ps-[0.8rem] text-[1.1rem] font-[500] h-full w-full flex items-center justify-start hover:bg-[#333] transition-all ease-in-out duration-300">Project-03</a>
                            </li>
                            <li className="h-[44px] w-full">
                                <a href="#null" className="ps-[0.8rem] text-[1.1rem] font-[500] h-full w-full flex items-center justify-start hover:bg-[#333] transition-all ease-in-out duration-300">Project-04</a>
                            </li>
                            <li className="h-[44px] w-full">
                                <a href="#null" className="ps-[0.8rem] text-[1.1rem] font-[500] h-full w-full flex items-center justify-start hover:bg-[#333] transition-all ease-in-out duration-300">Project-05</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;