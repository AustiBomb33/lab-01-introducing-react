import React, { useState } from 'react';
import Greeting from './component/Greeting'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'react-bootstrap';

const App = () => {

    const [name, setName] = useState("");

    console.log("App Loaded");
    return (
        <Jumbotron>
            <input
                onChange={({ target: { value } }) => setName(value)}
                placeholder="Enter your name"
            />
            <Greeting name={name} />
        </Jumbotron>
    );
}

export default App;