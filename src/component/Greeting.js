import React from 'react';
import '../Styles.css'
function Greeting({name}) {
    console.log("Generating Greeting with the following name");
    name = name.trim();
    console.log(name);
    if(name === ""){
        return <h1>Hey! It's been a while!</h1>
    } else {
        return (
            <h1>Hey, {name}! It's been a while!</h1>
    );
    }
}

export default Greeting;