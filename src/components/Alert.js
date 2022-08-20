import "../App.css";
import React, { useContext } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { AppContext } from '../context/AppContext';

const AlertBox = ()=>{
    const { alerts, setAlerts } = useContext(AppContext);

    const closeAlert = ()=>{
        setAlerts(null);
    }

    if (!alerts) return (<></>);
    return (
        <Alert severity={alerts.theme} id="alert-box" onClick={closeAlert}>
            {alerts.title && <AlertTitle>{alerts.title}</AlertTitle>}
            {alerts.text}
        </Alert>
    )
}

export default AlertBox;