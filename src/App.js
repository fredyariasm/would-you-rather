import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import React, { Component } from 'react';
import QuestionToggle from './components/QuestionToggle';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuestionPage from './components/QuestionPage';
import Nav from './components/Nav';
import NewQuestion from './components/NewQuestion';
import LeaderBoard from './components/LeaderBoard';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          {this.props.loading === true
            ? null
            : <div>
              <Route path='/' exact component={QuestionToggle} />
              <Route path='/add' exact component={NewQuestion} />
              <Route path='/questions/:id' component={QuestionPage} />
              <Route path='/leaderboard'component={LeaderBoard}/>
            </div>}
        </div>
      </Router>

    );
  }

}


function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App);
