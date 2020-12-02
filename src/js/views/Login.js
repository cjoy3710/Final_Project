import React from "react";

export default function Login() {
	return (
		<div>
			<h1>Login</h1>
			<form>
				<label>
					E-mail
					<input name="email" type="email" placeholder="e-mail" />
				</label>
				<label>
					Password
					<input name="passwprd" type="password" placeholder="password" />
				</label>
				<button type="submit">Log In</button>
			</form>
		</div>
	);
}
