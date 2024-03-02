import React from 'react';
import AppLayout from '../layouts/AppLayout';
import Header from '../components/Header';
import AddProject from './AddProject';

const Home = () => {
    return (
        <AppLayout>
            <Header/>
            <AddProject/>
        </AppLayout>
    );
}

export default Home;