import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/SharedComponents/Header/Header';
import Toast from '../Components/SharedComponents/Toast/Toast';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toast />
        </div>
    );
};

export default Root;