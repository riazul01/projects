import React from 'react';
import ReactDOM from 'react-dom';

const AddProject = () => {
    return ReactDOM.createPortal(
        <div className="py-[5rem] fixed top-0 left-0 h-screen w-full flex items-center justify-center bg-[#000] bg-opacity-70 z-50">
            <h1>Hello!</h1>
        </div>,
        document.getElementById('form')
    );
}

export default AddProject;