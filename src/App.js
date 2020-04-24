import React, { Component } from 'react';
import Person from './Person/Person'
import Radium from 'radium';
import './App.css';

// Class approach
class App extends Component {
    state = {
        persons: [
            {id:'lsnldnvlsn', name: 'Max', age: 28},
            {id:'ldbnvljsbv',name: 'Manu', age: 29},
            {id:'kqdbckjbdcqk',name: 'Stephanie', age: 32}
        ],
        showPersons: false
    }

    namedChangedHandler = (event, id) => {
        const personIndex  = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
                ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons=[...this.state.persons]
        persons.splice(personIndex,1);

        this.setState({
            persons:persons
        })
    }

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    }
    
    render() {
        const style = {
            backgroundColor:'green',
            color:'white',
            font:'inherit',
            border:'1px solid blue',
            padding:'8px',
            cursor:'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color:'black'
            }
        }

        let persons = null;

        if(this.state.showPersons) {
            style.backgroundColor='red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color:'black'
            }
            persons = (
                <div>
                    {this.state.persons.map((person,index) => {
                        return(
                            <Person
                                name={person.name}
                                age={person.age}
                                click={() => this.deletePersonHandler(index)}
                                key={person.id}
                                changed={(event) => this.namedChangedHandler(event, person.id)}/>
                        )
                    })}
                </div>
            );
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return(
            <div className="App">
                <h1>Hi, I'am a React App</h1>
                <p className={classes.join(' ')}>This is really working</p>
                <button
                    onClick={this.togglePersonsHandler}
                    style={style}>Toggle Persons</button>

                {persons}

            </div>
        );
    }
}

export default Radium(App);

// Functional Approach (with Hook)

// import React, { useState } from 'react';
// const app = props => {
//     const [personState, setPersonState] = useState({
//         persons: [
//             {name: 'Max', age: 28},
//             {name: 'Manu', age: 29},
//             {name: 'Stephanie', age: 32}
//             ],
//         anotherName:"Myname"
//         });
//
//     const switchNamehandler = () => {
//         setPersonState({
//             persons: [
//                 {name: 'Martin', age: 46},
//                 {name: 'Manu', age: 29},
//                 {name: 'Anna', age: 31}
//             ]
//             //anotherName:"Myname2"
//         })
//     }
//
//     return (
//         <div className="App">
//             <h1>Hi, I'am a React App</h1>
//             <button onClick={switchNamehandler}>Switch Name</button>
//             <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
//             <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
//             <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
//             <p>{personState.anotherName}</p>
//         </div>
//     );
// };
//
// export default app;
