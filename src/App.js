import './App.css';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import React, { Component } from 'react'


class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }

  render(){
    return (
      <div className="App">
        Here is coming the app
      </div>
    );
  }
  
}


function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
