import React, {useState} from 'react'
import styles from './Auth.module.css';
import {BehaviorSubject} from "rxjs";
import {SButton, Title, InputContainer, MyForm, Container} from './style';

const LoginForm = ({repList}) => {
    const [login, setLogin] = useState('');
    const [isChecked, setChecked] = useState(false);
    const [password, setPassword] = useState('');
    const currentUser = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    return (
        <Container>
            {(currentUser.value != null ?
                    (<div><SButton type="ghost"
                             onClick={logOut}>Log out</SButton>
                     {repList}
                    </div>):
                    <div>
                        <Title>Log in page</Title>
                        <MyForm>
                            <div>
                                <InputContainer value={login} onChange={(event) => setLogin(event.target.value)}
                                                name="login" required placeholder="Username"/>
                                <InputContainer name="password" type="password" required
                                                placeholder="Password"
                                                onChange={(event) => setPassword(event.target.value)} value={password}/>
                                <SButton type="primary" onClick={loginFor}>Log in</SButton>
                            </div>
                        </MyForm>
                    </div>
            )
            }
        </Container>
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
                currentUser.next(user);
                console.log('in Local storage: ', localStorage.getItem('currentUser'));
                setLogin();
                setPassword();
                return user;
            }
        );

        return promise;
    }

    function logOut() {
        localStorage.removeItem('currentUser');
        currentUser.next(null);
        window.location.reload(true);
    }
};

export default LoginForm;