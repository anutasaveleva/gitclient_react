import { createStore } from 'redux';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = {
    user:{},
    loggedIn: false,
    repList : 'myreps'
};
function authentication(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.user,
                loggedIn: true
            };
        case 'LOGOUT':
            const currentUser = localStorage.getItem('currentUser');
            localStorage.removeItem('currentUser');
            currentUser.next(null);
            return {
                user: {},
                loggedIn: false
            };

        default:
            return state;
    }};



let store  = createStore(authentication,initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const logIn = () => {
    const currentUser = localStorage.getItem('currentUser');
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        //body: JSON.stringify({username, password})
    };
    const promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve(requestOptions), 1000);
    }).then(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUser.next(user);
            console.log('in Local storage: ', localStorage.getItem('currentUser'));
            return user;
        }
    )/*.then((response) => {
        dispatch({ type: "LOGIN", payload: response})
    })*/;
}

export const logout = {type: "LOGOUT"};

export default store;