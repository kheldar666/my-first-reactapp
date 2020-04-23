import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

const app = props => {
    const [personState, setPersonState] = useState({
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 32}
            ],
        anotherName:"Myname"
        });

    const switchNamehandler = () => {
        setPersonState({
            persons: [
                {name: 'Martin', age: 46},
                {name: 'Manu', age: 29},
                {name: 'Anna', age: 31}
            ]
            //anotherName:"Myname2"
        })
    }

    return (
        <div className="App">
            <h1>Hi, I'am a React App</h1>
            <button onClick={switchNamehandler}>Switch Name</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
            <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
            <p>{personState.anotherName}</p>
        </div>
    );
};

export default app;
