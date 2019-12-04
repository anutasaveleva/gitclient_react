import React from 'react';
import Routing from "./Routing";
function App() {
    return (
        <Routing/>
    );
}

function logOut() {
    localStorage.removeItem('currentUser');
    //currentUser.next(null);
    window.location.reload(true);
}
export default App;
