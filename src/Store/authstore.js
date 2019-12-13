import { createStore } from 'redux';
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
            localStorage.removeItem('token');
            return {
                user: {},
                loggedIn: false
            };

        default:
            return state;
    }};



let store  = createStore(authentication,initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const logout = {type: "LOGOUT"};

export default store;