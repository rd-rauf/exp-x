import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            height: '100%',
            h1: {
                margin: 0
            }
        },
    },
}));

export default function ContentArea(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={0}>
                {props.children}
            </Paper>
        </div>
    );
}