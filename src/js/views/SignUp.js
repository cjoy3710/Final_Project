import React from "react";

export default function SignUp() {
	return (
		<div>
			<h1>Sign Up</h1>
			<form onSubmit={handleLogin}>
				<label>
					E-mail
					<input name="email" type="email" placeholder="e-mail" />
				</label>
				<label>
					Password
					<input name="passwprd" type="password" placeholder="password" />
				</label>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
}
