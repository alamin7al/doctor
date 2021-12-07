import React from 'react';
import Navigations from '../Share/Navigations.js'
import AppointmentBanner from './AppointementBanner';
import Banner from './Banner';

import Services from './Services';
const Home = () => {
    return (
        <div>
            <Navigations></Navigations>
           
            <Banner></Banner>
            <AppointmentBanner/>

            <Services></Services>
        </div>
    );
};

export default Home;