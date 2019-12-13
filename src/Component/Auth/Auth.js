import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import {useLazyQuery} from "@apollo/react-hooks";
import VALIDATION_QUERY from "../../Queries/validation";


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



const LoginForm = () => {
    const [password, setPassword] = useState('');
    const [token] = useState(localStorage.getItem('token'));
    const classes = useStyles();
    const [error, setError] = useState(false);
    const [checkToken] = useLazyQuery(VALIDATION_QUERY, {
        onCompleted: () => {
            setError(false);
            window.location.reload();
        },
        onError: () => {
            setError(true);
            localStorage.removeItem('token');
        }
    });

    const login = () => {
        localStorage.setItem('token', password);
        checkToken();
    };

    return token ? (
        <Redirect to='/'/>
    ) : (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Your personal GitHub token"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {error && <Typography color="error">
                        Token is invalid. Try again!
                    </Typography>}
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={login}>
                        Sign In
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default LoginForm;