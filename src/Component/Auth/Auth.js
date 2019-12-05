import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



const LoginForm = ({stats}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const currentUser = localStorage.getItem('currentUser');
    const classes = useStyles();
    console.log('cur user',currentUser);
    return currentUser ? (
        <Redirect to='/'/>
    ) : (
                <div>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={login}
                                    onChange={(event) => setLogin(event.target.value)}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <Button
                                    type="primary"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                onClick={loginFor}>
                                    Sign In
                                </Button>
                        </div>
                    </Container>
                </div>
    );

    function loginFor() {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({login, password})
        };
        const promise = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(requestOptions), 1000);
        }).then(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                //currentUser.next(user);
                console.log('in Local storage: ', localStorage.getItem('currentUser'));
                setLogin();
                setPassword();
                return user;
            }
        );

        return promise;
    }


};

export default LoginForm;