import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

function App() {
    const  [counter, setCounter]=useState(0);
    return (
        <flex className="mainy">
        <Button variant="contained" color="primary" onClick={()=> setCounter(counter+1)}>
            Hello World
        </Button>
        <li> {counter}</li>
        </flex>
    );
}

export default App;
