import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/Login'
import {
  attemptToLogin
} from '../actions/index';

import { Link } from 'react-router';

const mapStateToProps = state => {
	return state;
}

const mapDispatchToProps = dispatch => {
  return {
    attemptToLogin: ((userName, password) => dispatch(attemptToLogin(userName, password)))
  }
}
const App = props => {
	const { isLoggedIn, attemptToLogin } = props;

	if (!isLoggedIn) {
		return <LoginForm {...props} />
	}

	return (
    <div className="app">
      <aside>
        <div>About Us</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
        </ul>
      </aside>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
