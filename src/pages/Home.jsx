import React, { useState } from 'react';
import AppLayout from '../layouts/AppLayout';
import Header from '../components/Header';
import AddProject from './AddProject';

const Home = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <AppLayout>
            <Header setShowForm={setShowForm}/>
            {showForm && <AddProject setShowForm={setShowForm}/>}
        </AppLayout>
    );
}

export default Home;