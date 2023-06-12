import "./login.css"

export default function Login() {
	return (
		<div className="login">
			<div className="login-container">
				<div className="login-left">
					<h3 className="login-logo">Only Frendz</h3>
					<span className="login-desc">Connect with frendz and the world around you.</span>
				</div>
				<div className="login-right">
					<div className="login-box">
						<input type="email" placeholder="Enter email address" className="login-input" />
						<input type="password" placeholder="Enter password" className="login-input" />
						<button className="login-btn">Log In</button>
						<span className="login-forgot">Forgot password?</span>
						<button className="register-btn">Create a new account</button>
					</div>
				</div>
			</div>
		</div>
	)
}
