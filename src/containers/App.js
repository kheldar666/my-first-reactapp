import React, { Component } from 'react';
import Persons from '../components/Persons/Persons'
import classes from './App.css';
import Cockpit from "../components/Cockpit/Cockpit";

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
        let persons = null;

        if(this.state.showPersons) {
            persons = <Persons
                        persons={this.state.persons}
                        deletePersonHandler={this.deletePersonHandler}
                        namedChangedHandler={this.namedChangedHandler} />;
        }



        return(
            <div className={classes.App}>
                <Cockpit
                    title={this.props.appTitle}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    togglePersonsHandler={this.togglePersonsHandler}/>

                {persons}
            </div>
        );
    }
}

export default App;