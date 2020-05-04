import React, {PureComponent} from 'react'
import Person from "./Person/Person";

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(nextProps.persons!== this.props.persons){
    //         return true;
    //     }
    //     return false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message:'Snapshot!'};
    }

    render() {
        console.log('[Persons.js] rendering...')

        return (
            this.props.persons.map((person,index) => {
                return <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        click={() => this.props.deletePersonHandler(index)}
                        changed={(event) => this.props.namedChangedHandler(event, person.id)}/>
                })
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate...', snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }
}

export default Persons;