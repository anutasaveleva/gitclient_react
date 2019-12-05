import { AppBar, Toolbar,IconButton , Typography,Button} from '@material-ui/core';
import React from "react";
import {Redirect} from "react-router-dom";

export function Header () {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">

                </IconButton>
                <Typography variant="h6" onClick={<Redirect to='/'/>}>
                    GitHub Client
                </Typography>
            </Toolbar>
        </AppBar>
    )
}