import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import React from "react";
import {SButton} from "../Auth/style";
import {AccountCircle} from "@material-ui/icons";
import {Redirect} from "react-router-dom";

export function Header() {
    const currentUser = localStorage.getItem('token');
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    <a href='/'>
                        GitHub Client
                    </a>
                </Typography>
                <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"

                        color="inherit"><a href='/myprofile'>
                        <AccountCircle/></a>
                    </IconButton>
                </div>
                {
                    currentUser && <SButton onClick={logOut}>Log out</SButton>
                }
            </Toolbar>
        </AppBar>
    );

    function logOut() {
        localStorage.removeItem('token');
        window.location.reload(true);
        return (
            <Redirect to="/auth"/>
        );


    }
}