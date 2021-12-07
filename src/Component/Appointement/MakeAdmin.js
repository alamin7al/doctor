import { TextField } from '@mui/material';
import React, { useState } from 'react';
//alamins@gmail.com
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)

    }
    const handleAdminSubmit = e => {
        const user = { email }
        e.preventDefault()
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                }
            })
    }
    return (
        <div>
            <h3>Make Admin</h3>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    // sx={{ width: '100%', m: 2 }}
                    id="outlined-size-small"
                    label='Email'
                    type='email'
                    onBlur={handleOnBlur}
                    variant='standard'
                    size='small'
                />
                <button type='submit' className='btn btn-primary'>Admin</button>
            </form>
            {success && <div class="alert alert-info" role="alert">
                Make Admin SuccessFully
            </div>}
        </div>
    );
};

export default MakeAdmin;