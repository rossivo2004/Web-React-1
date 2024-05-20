import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderAdmin from '../components/HeaderAdmin';
import NavAdmin from '../components/NavAdmin';

const AdminLayout = () => {
    return (
        <div>
            <HeaderAdmin />
            <NavAdmin />
            <main>
                <Outlet /> {/* Render các trang con ở đây */}
            </main>
        </div>
    );
};

export default AdminLayout;
