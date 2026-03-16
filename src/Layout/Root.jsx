import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../Components/SharedComponents/Header/Header';
import Toast from '../Components/SharedComponents/Toast/Toast';

const HIDE_NAVBAR_PATHS = ['/payment-select', '/payment'];

const Root = () => {
    const { pathname } = useLocation();
    const hideNavbar = HIDE_NAVBAR_PATHS.includes(pathname);

    return (
        <div>
            {!hideNavbar && <Header />}
            <Outlet />
            <Toast />
        </div>
    );
};

export default Root;