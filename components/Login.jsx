import React from 'react';
class Login extends React.Component {
		constructor(props) {
			super(props);
			this.onSubmit = this.onSubmit.bind(this);
		}

		onSubmit() {
			const { attemptToLogin } = this.props;
			const userName = this.refs.userName.value;
			const password = this.refs.password.value;
			attemptToLogin(userName, password);
		}

		render() {
			return (
				<div className="login-container">
					<div className="row">
						<label>User Name
							<input ref="userName" type="text" />
						</label>
						<label>Password
							<input ref="password" type="password" />
						</label>
						<button onClick={this.onSubmit}>Submit</button>
					</div>
				</div>
			);
		}
}

export default Login;
