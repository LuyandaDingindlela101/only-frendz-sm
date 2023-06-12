import "./register.css"

export default function Register() {
	return (
		<div className="register">
			<div className="register-container">
				<div className="register-left">
					<h3 className="register-logo">Only Frendz</h3>
					<span className="register-desc">Connect with frendz and the world around you.</span>
				</div>
				<div className="register-right">
					<div className="register-box">
						<input type="text" placeholder="Enter username" className="register-input" />
						<input type="email" placeholder="Enter email address" className="register-input" />
						<input type="password" placeholder="Enter password" className="register-input" />
						<input type="password" placeholder="Confirm password" className="register-input" />
						<button className="register-btn">Sign up</button>
						<button className="login-btn">Log into your account</button>
					</div>
				</div>
			</div>
		</div>
	)
}
