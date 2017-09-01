import react from 'react';

const Login = props => {
	const attemptToLogin = (userName, password) => { }
	
	return (
		<div class="login-container">
			<div class="row">
				<label>User Name
					<input type="text" />
				</label>
				<label>Password
					<input type="password" />
				</label>
			</div>
		</div>
	)
}

export default Login;