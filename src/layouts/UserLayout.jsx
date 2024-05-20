import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

const UserLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet /> {/* Render các trang con ở đây */}
            </main>
            <Footer />
        </div>
    );
};

export default UserLayout;
