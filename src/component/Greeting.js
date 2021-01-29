import React from 'react';

function Greeting(name: String) {
    console.log("Generating Greeting with the following name");
    name = name.name.trim();
    console.log(name);
    if(name === ""){
        return <p >Hey! It's been a while!</p>
    } else {
        return (
            <p>Hey, {name}! It's been a while!</p>
    );
    }
}

export default Greeting;