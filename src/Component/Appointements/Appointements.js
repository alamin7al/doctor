import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../Login/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Appointements = ({date}) => {
    const { user } = useAuth()
    const [appointement, setAppointement] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/appointements?email=${user?.email}&date=${date}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointement(data))
    }, [date])

    return (
        <Grid container spacing={2}>
            <h3>Appointements {appointement?.length} </h3>
            <TableContainer component={Paper}>
                <Table  aria-label="APpointements table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointement.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row?.patientName}
                                </TableCell>
                                <TableCell align="right">{row?.time}</TableCell>
                                <TableCell align="right">{row?.serviceName}</TableCell>
                               
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default Appointements;