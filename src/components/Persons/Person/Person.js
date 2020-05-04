import React, {Component} from 'react'
import classes from "./Person.css";
import withClass from "../../../hoc/withClass";
import Aux from '../../../hoc/Aux';
import AuthContext from '../../../context/auth-context'


import PropTypes from 'prop-types';

class Person  extends Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        //this.inputElement.focus();`
        this.inputElementRef.current.focus();
        console.log('Authenticated : '+this.context.authenticated)
    }

    render(){
        console.log('[Person.js] rendering...')

        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log In</p>}
                <p onClick={this.props.click}>
                    I am {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input type="text"
                       //ref={(inputEl) => {this.inputElement = inputEl}}
                       ref={this.inputElementRef}
                       onChange={this.props.changed}
                       value={this.props.name}/>
            </Aux>
        );
    };

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed:PropTypes.func
};

export default withClass(Person, classes.Person);