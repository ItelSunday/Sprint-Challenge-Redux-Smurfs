import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import {getSmurfs} from '../actions/index'
import SmurfForm from './SmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount(){
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <h5>Welcome to your Redux version of Smurfs!</h5>
        
        <SmurfForm />
      {this.props.smurfs.map(smurf => {
        return (
          <div>
          <h1>{smurf.name}</h1>
          <h2>{smurf.age}</h2>
          <h3>{smurf.height}</h3>
          </div>
        )
      })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
