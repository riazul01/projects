import React, { useState, createContext, useEffect } from 'react';

// firebase
import { fs, storage } from '../firebase';
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// context
export const ProjectUploadContext = createContext();

// toastify
import { toast } from 'react-toastify';

const ProjectUploadContextProvider = ({ children }) => {
    const [projectData, setProjectData] = useState(null);
    const [isUploaded, setIsUploaded] = useState(false);
    
    useEffect(() => {
        if (projectData !== null) {
            // upload project data to firestore
            const addDataToFireStore = async (project) => {
                try {
                    await addDoc(collection(fs, "projects"), project);
                    setIsUploaded(true);
                } catch (error) {
                    console.log(error);
                }
            }

            const storageRef = ref(storage, `images/${projectData.image.name}`);
            const uploadTask = uploadBytesResumable(storageRef, projectData.image);

            // upload project image to storage
            uploadTask.on('state_changed', (snapshot) => {
                    console.log(snapshot.state);
                }, (error) => {
                    console.log(error.code);
                    setProjectData(null);
                }, () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        projectData.image = downloadURL;
                        addDataToFireStore(projectData);
                        setProjectData(null);
                    });
                }
            );
            
            // notification
            toast.promise(uploadTask, {
                pending: 'Uploading...',
                success: 'Product uploaded!',
                error: 'An error occured!'
            });
        }
    }, [projectData]);

    return (
        <ProjectUploadContext.Provider value={{setProjectData, isUploaded, setIsUploaded}}>
            {children}
        </ProjectUploadContext.Provider>
    );
}

export default ProjectUploadContextProvider;