import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import React, { Component } from 'react';
import QuestionToggle from './components/QuestionToggle';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import QuestionPage from './components/QuestionPage';
import Nav from './components/Nav';
import NewQuestion from './components/NewQuestion';
import LeaderBoard from './components/LeaderBoard';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import NoFound from './components/NoFound';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Nav />
            <Switch>
              <Route path="/login" exact component={Login} />
              <ProtectedRoute path='/' exact component={QuestionToggle} />
              <ProtectedRoute path='/add' exact component={NewQuestion} />
              <ProtectedRoute path='/questions/:id' component={QuestionPage} />
              <ProtectedRoute path='/leaderboard' component={LeaderBoard} />
              <ProtectedRoute component={NoFound} />
            </Switch>

          </div>

        </div>
      </Router>

    );
  }

}

export default connect()(App);
