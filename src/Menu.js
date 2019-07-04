import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    appBar: {
        background: 'white',
        marginBottom: '25px'
    },
    typography:{
        color: 'green',
        fontWeight: 'bold'
    }
}));

const TopBar = (props) =>{
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static">
            <Toolbar >
                <Typography variant="h5" className={classes.typography} >Signos</Typography>
            </Toolbar>
        </AppBar>
    )
}


export default TopBar;