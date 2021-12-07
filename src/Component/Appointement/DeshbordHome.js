import * as React from 'react';

import { Grid } from '@mui/material';
import Celender from './Celender';
import Appointements from '../Appointements/Appointements';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
const DeshbordHome = () => {
    const [date, setDate] = React.useState(new Date())

    return (
        <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={5}>
            <Celender date={date} setDate={setDate}></Celender>
        </Grid>
        <Grid item xs={12} sm={7}>
            <Appointements date={date}></Appointements>
        </Grid>
    </Grid>
    );
};

export default DeshbordHome;