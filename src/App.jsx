import React, { useState } from 'react';
import Greeting from './component/Greeting'
import './Styles.css'

const App = () => {

    const [name, setName] = useState("");

    console.log("App Loaded");
    return (
        
        <div id="styleInput">
            <input
                onChange={({ target: { value } }) => setName(value)}
                placeholder="Enter your name"
            />
            <Greeting name={name} />
        </div>
    );
}

export default App;