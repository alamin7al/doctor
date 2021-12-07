import React from 'react';
import { useState } from 'react';
import AppointementModal from './AppointementModal';

const Booking = ({ booking,date ,setBookingSucsess}) => {
    const { name, time, space } = booking
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="col-md-4">
                
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{time}</p>
                        <p class="card-text">{space}</p>
                        <button onClick={handleShow} className='btn btn-outline-danger'>Appointementt</button>
                    </div>
                </div>
            </div>
            <AppointementModal
            date={date}
            booking={booking}
            setBookingSucsess={setBookingSucsess}
                show={show}
                handleClose={handleClose}
            ></AppointementModal>
        </>
    );
};

export default Booking;