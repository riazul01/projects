import React, { useState } from 'react';

import { HiPlus } from "react-icons/hi";
import { BiSearchAlt } from 'react-icons/bi';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleNavToggle = (e) => {
        e.stopPropagation();
        setToggle(!toggle);
    }

    return (
        <div className="flex flex-col xl:flex-row items-center justify-between w-full">
            {/* title */}
            <h1 className="text-[#fff] text-[2.2rem] uppercase font-[700] bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 inline-block text-transparent bg-clip-text">Macros.</h1>

            <div className="relative mt-[1rem] xl:mt-0 flex flex-wrap items-center justify-center xl:justify-end gap-[1rem] w-full">
                {/* projects count */}
                <div className="px-[0.8rem] py-[0.55rem] flex items-center gap-[0.2rem] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-lg cursor-pointer">
                    <span className="text-[1.1rem] font-[500]">Items:</span>
                    <span className="text-[1.1rem] font-[500] flex items-center justify-center w-[1.4rem]">{`${2}`.padStart(2, '0')}</span>
                    <span className="text-[1.1rem] font-[500]">/ 20</span>
                </div>

                {/* add project */}
                <div className="px-[0.8rem] py-[0.55rem] flex items-center gap-[0.3rem] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-lg cursor-pointer">
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

                <div onClick={handleNavToggle} className={`toggler ${toggle ? 'active' : null} h-[44px] w-[54px] grid place-items-center cursor-pointer bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-lg`}>
                    <span className="toggleBar"></span>
                </div>
            </div>
        </div>
    );
}

export default Header;