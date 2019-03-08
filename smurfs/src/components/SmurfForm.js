import React, {Component} from 'react'
import {connect} from 'react-redux';

import {addSmurf} from '../actions'

class SmurfForm extends Component {
    state= {
        name: '',
        age: '',
        height: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                 <form  > 
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder= 'name'
          />
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder= 'age'
          />
           <input
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
            placeholder= 'height'
          />
       



          <button>Add Smurf</button>
        </form>
            </div>
        )
    } 
}


export default connect(null, {addSmurf})(SmurfForm);