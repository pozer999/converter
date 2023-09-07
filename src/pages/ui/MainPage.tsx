import { Button } from '@mui/material';
import React from 'react';
import Animals from 'widgets/Animals/ui/Animals';
import ResponsiveAppBar from 'widgets/ResponsiveAppBar/ui/ResponsiveAppBar';

const MainPage = () => {
    return (
        <div>
           <ResponsiveAppBar/>
           <Animals/>
        </div>
    );
};

export default MainPage;