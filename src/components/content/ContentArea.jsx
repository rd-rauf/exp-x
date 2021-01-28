import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://exp-man.netlify.app">
        Expense Manager
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function ContentArea(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={0}>
                {props.children}
            </Paper>
            <Box mt={5}>
                <Copyright />
            </Box>
        </div>
    );
}