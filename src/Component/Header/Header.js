import { AppBar, Toolbar,IconButton , Typography,Button} from '@material-ui/core';
import React from "react";
import {Redirect} from "react-router-dom";
import Search from "../App/Search";
import {SButton} from "../Auth/style";
import {AccountCircle} from "@material-ui/icons";
import './Header.css';

export function Header () {
    const currentUser = localStorage.getItem('currentUser');
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    <a href='/' >
                    GitHub Client
                    </a>
                </Typography>
                <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"

                        color="inherit"><a href='/myprofile'>
                        <AccountCircle /></a>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}