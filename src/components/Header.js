import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

export default function Header() {
    const classes = useStyles();

    return (

        <div>
            <br/>
            <AppBar color={"secondary"} position="static" className={classes.root}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography variant="h5">
                        Timestamp.fyi
                    </Typography>
                    <Typography variant="subtitle2" className={classes.title}>
                        &nbsp;&nbsp;&nbsp;&nbsp;Date and timestamp conversion tools
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
