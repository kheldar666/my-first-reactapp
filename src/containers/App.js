import React, { Component } from 'react';
import Persons from '../components/Persons/Persons'
import classes from './App.css';
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

// Class approach
class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
        this.state = {
            persons: [
                {id:'lsnldnvlsn', name: 'Max', age: 28},
                {id:'ldbnvljsbv',name: 'Manu', age: 29},
                {id:'kqdbckjbdcqk',name: 'Stephanie', age: 32}
            ],
            showPersons: false,
            showCockpit:true,
            changeCounter:0,
            authenticated: false
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    // UNSAFE_componentWillMount() {
    //     console.log('[App.js] componentWillMount');
    // }

    componentDidMount(){
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Apps.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Apps.js] componentDidUpdate');
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

        this.setState((prevState, props) => {
                return {
                    persons: persons,
                    changeCounter: prevState.changeCounter+1
                };
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

    loginHandler = () => {
        this.setState({
            authenticated: true
        })
    }
    
    render() {
        console.log('[Apps.js] render')
        let persons = null;

        if(this.state.showPersons) {
            persons = <Persons
                        persons={this.state.persons}
                        deletePersonHandler={this.deletePersonHandler}
                        namedChangedHandler={this.namedChangedHandler}
                        isAuthenticated={this.state.authenticated}/>;
        }

        return(
            <Aux>
                <button onClick={() => {this.setState({showCockpit:!this.state.showCockpit})}}>Toggle Cockpit</button>
                <AuthContext.Provider value={{
                    authenticated: this.state.authenticated,
                    login:this.loginHandler
                }}>
                    {this.state.showCockpit ?
                        <Cockpit
                            title={this.props.appTitle}
                            personsLength={this.state.persons.length}
                            showPersons={this.state.showPersons}
                            togglePersonsHandler={this.togglePersonsHandler}/>
                    : null }

                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default withClass(App, classes.App);