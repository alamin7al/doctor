import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import useAuth from '../Login/useAuth';

const AppointementModal = ({ show, handleClose, booking, date,setBookingSucsess }) => {
    const { name, time } = booking
    const { user } = useAuth()
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newInfo = { ...bookingInfo }
        newInfo[field] = value
        setBookingInfo(newInfo)
    }
    const handleBookingSubmit = e => {
        e.preventDefault()
        const appointement = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }

        fetch('http://localhost:5000/appointements', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointement)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    setBookingSucsess(true)
                }
            })

    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <h4>{name}</h4>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '100%', m: 2 }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size='small'
                        />
                        <TextField
                            sx={{ width: '100%', m: 2 }}
                            id="outlined-size-small"
                            name='patientName'
                            onBlur={handleOnBlur}

                            defaultValue={user?.displayName}
                            size='small'
                        />
                        <TextField
                            sx={{ width: '100%', m: 2 }}
                            id="outlined-size-small"
                            name='email'
                            defaultValue={user.email}
                            onBlur={handleOnBlur}

                            size='small'
                        />
                        <TextField
                            sx={{ width: '100%', m: 2 }}
                            id="outlined-size-small"
                            name='phone'
                            defaultValue='Your Phone Number'
                            onBlur={handleOnBlur}

                            size='small'
                        />
                        <TextField
                            disabled
                            sx={{ width: '100%', m: 2 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size='small'
                        />
                        <button type='submit' className='btn btn-primary'>Submit</button>

                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-primary' onClick={handleClose}>
                        Close
                    </button>

                </Modal.Footer>
            </Modal>
        </>

    )

}

export default AppointementModal;