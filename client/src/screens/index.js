import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as login from './login';
import * as servers from './servers';

class Routes extends Component {
  render() {
    const { token } = this.props;

    return (
      <Router>
        <Route exact path='/' component={token ? servers.ServersScreen : login.LoginScreen} />
      </Router>
    );
  }
}

function mapStateToProps(state, props) {
  const { token } = state.login;

  return {
    token
  }
}

export default connect(mapStateToProps)(Routes);
