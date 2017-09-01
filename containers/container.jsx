import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/Login'

const mapStateToProps = state => {
	return { isLoggedIn: false }
}

const App = props => {
	console.log('Inside container');
	const { isLoggedIn } = props;

	if (!isLoggedIn) {
		return <LoginForm />
	}

	return <div> Authenticated </div>;
}

export default connect(mapStateToProps, null)(App);