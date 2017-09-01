import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/Login'

const mapStateToProps = state => {
	return { isLoggedIn: false }
}

const App = props => {
	const { isLoggedIn } = props;
    return <LoginForm />
	if (!isLoggedIn) {

	}

	return <div> Authenticated </div>;
}

export default connect(mapStateToProps, null)(App);