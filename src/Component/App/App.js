import React from 'react';
import {SButton} from "../Auth/style";

function App() {
    return (
        <flex className="mainy">
            <SButton type="ghost"
                     onClick={logOut}>Log out</SButton>
        </flex>
    );
}


function logOut() {
    localStorage.removeItem('currentUser');
    //currentUser.next(null);
    window.location.reload(true);
}
export default App;
