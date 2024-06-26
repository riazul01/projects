import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';

// context
import { ProjectUploadContext } from '../context/ProjectUploadContextProvider';

// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// icons
import { MdUpload } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const AddProject = ({setShowForm}) => {
    const {setProjectData, isUploaded, setIsUploaded} = useContext(ProjectUploadContext);
    const [project, setProject] = useState({title: '', fonts: '', icons: '', status: '', plugins: '', tags: '', type: '', size: '', categories: '', site: '', code: ''});
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    useEffect(() => {
        if (selectedImage === null || selectedImage === undefined) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedImage);
        reader.onload = () => setPreviewImage(reader.result);
    }, [selectedImage]);

    useEffect(() => {
        if (isUploaded) {
            setProject({title: '', fonts: '', icons: '', status: '', plugins: '', tags: '', type: '', size: '', categories: '', site: '', code: ''});
            setSelectedImage(null);
            setPreviewImage(null);
            setIsUploaded(false);
        }
    }, [isUploaded]);

    const handleInputChange = (e) => {
        if (e.target.type === 'text') {
            setProject({...project, [e.target.name]: e.target.value});
        } else {
            if (e.target.files[0] !== undefined) {
                setSelectedImage(e.target.files[0]);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const projectData = {
            title: project.title,
            fonts: project.fonts !== '' ? project.fonts.split(' ') : '',
            icons: project.icons !== '' ? project.icons.split(' ') : '',
            status: project.status,
            plugins: project.plugins !== '' ? project.plugins.split(' ') : '',
            tags: project.tags.split(' '),
            type: project.type,
            size: project.size,
            categories: project.categories.split(' '),
            site: project.site,
            code: project.code,
            image: selectedImage
        }
        setProjectData(projectData);
    }

    return ReactDOM.createPortal(
        <>
        <div className="py-[5rem] fixed top-0 left-0 h-screen w-full flex items-start justify-center bg-[#000] bg-opacity-70 overflow-auto z-50">
            
            {/* close form */}
            <div onClick={() => setShowForm(false)} className="fixed top-[2rem] right-[1rem] sm:right-[2rem] cursor-pointer">
                <FaTimes className="text-[1.5rem]"/>
            </div>

            <div className="mx-[0.4rem] p-[1rem] w-full max-w-[420px] bg-[#222] rounded-lg">
                {/* title */}
                <h1 className="text-[1.6rem] font-[600]">Add Project</h1>
                <div className="h-[0.4rem] w-[5rem] bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"></div>
                
                {/* form */}
                <form onSubmit={handleSubmit} className="mt-[1.4rem] w-full h-auto">
                    <input value={project.title} onChange={handleInputChange} type="text" name="title" className="mt-[0.4rem] ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="Project title" required/>
                    <input value={project.fonts} onChange={handleInputChange} type="text" name="fonts" className="mt-[1rem] ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="Fonts"/>
                    <input value={project.icons} onChange={handleInputChange} type="text" name="icons" className="mt-[1rem] ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="Icons"/>
                    <input value={project.status} onChange={handleInputChange} type="text" name="status" className="mt-[1rem] ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="Status" required/>
                    <input value={project.plugins} onChange={handleInputChange} type="text" name="plugins" className="mt-[1rem] ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="Plugins"/>
                    <input value={project.tags} onChange={handleInputChange} type="text" name="tags" className="mt-[1rem] ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="Tags" required/>
                    <input value={project.type} onChange={handleInputChange} type="text" name="type" className="mt-[1rem] ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="Type" required/>
                    <input value={project.size} onChange={handleInputChange} type="text" name="size" className="mt-[1rem] ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="Size" required/>
                    <input value={project.categories} onChange={handleInputChange} type="text" name="categories" className="mt-[1rem] ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="Categories" required/>
                    <input value={project.site} onChange={handleInputChange} type="text" name="site" className="mt-[1rem] ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="Preview Link" required/>
                    <input value={project.code} onChange={handleInputChange} type="text" name="code" className="mt-[1rem] ps-[0.8rem] text-[1.1rem] h-[44px] w-full bg-[#111] border-none outline-none rounded-lg" placeholder="GitHub Link" required/>
                    
                    <div className="mt-[1rem] text-[1.1rem] flex items-center justify-center h-[130px] w-full bg-[#111] rounded-lg">
                        {previewImage === null ? <p>Project Thumb</p> : <img src={previewImage} className="w-full h-full object-contain" alt="preview"/>}
                    </div>

                    <div className="mt-[1rem]">
                        <label htmlFor="avatar" className="flex items-center justify-center gap-[0.2rem] h-[44px] bg-[#111] cursor-pointer rounded-lg">
                            <MdUpload className="text-[1.3rem]"/>
                            <span className="text-[1.1rem]">Upload Thumbnail</span>
                        </label>
                        <input onChange={handleInputChange} onClick={(e) => e.target.value=null} type="file" accept="image/*" id="avatar" className="h-0 w-0" required/>
                    </div>

                    <button type="submit" className="text-[1.1rem] font-[500] h-[44px] w-full rounded-lg bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600">Submit</button>
                </form>
            </div>
        </div>
        <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
        </>,
        document.getElementById('form')
    );
}

export default AddProject;