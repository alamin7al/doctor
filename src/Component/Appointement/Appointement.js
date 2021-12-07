import React from 'react';
import Navigations from '../Share/Navigations';
import AppointementHeader from './AppointementHeader';
import AvailabaleAppointenet from './AvailabaleAppointenet';

const Appointement = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Navigations></Navigations>
            <AppointementHeader date={date} setDate={setDate}></AppointementHeader>
            <AvailabaleAppointenet date={date}></AvailabaleAppointenet>
        </div>
    );
};

export default Appointement;