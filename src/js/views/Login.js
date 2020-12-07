import React, { useCallback, useContext } from "react";
import Form from "react-bootstrap";
import Button from "react-bootstrap";
import { Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import app from "../../base";
import { AuthContext } from "../store/AuthContext.js";

const Login = ({ history }) => {
	const handleLogin = useCallback(
		async event => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await app.auth().createUserWithEmailAndPassword(email.value, password.value);
				history.push("/");
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);
	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return <Redirect to="https://3000-f9da98eb-d310-44f3-8276-9f6baf85a297.ws-us03.gitpod.io/" />;
	}

	return (
		<div>
			<div className="container-fluid login-form">
				<h2 className="login-heading">Login to my account</h2>
				<form onSubmit={handleLogin}>
					<div className="form-group">
						<label className="label">Email address</label>
						<input
							name="email"
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
						{/* <small id="emailHelp" className="form-text text-muted">
							We will never share your email with anyone else.
						</small> */}
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							name="password"
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
					</div>
					<div className="form-check">
						<input type="checkbox" className="form-check-input" id="exampleCheck1" />
						<label className="form-check-label">I am not a robot.</label>
					</div>
					<button type="submit" className="btn btn-dark submit-btn">
						Login
					</button>
					<div>
						<p className="signup-link">
							Need to create an account?{" "}
							<Link to="/SignUp">
								<span>Sign up here.</span>
							</Link>
						</p>
					</div>
				</form>
				{/* <h1 classNameName="login-heading">Login</h1>
				<form>
					<label classNameName="label">
						E-mail
						<input name="email" type="email" placeholder="e-mail" />
					</label>
					<label classNameName="label">
						Password
						<input name="passwprd" type="password" placeholder="password" />
					</label>
					<button classNameName="btn btn-info login-submit" type="submit">
						Log In
					</button>
					<h2 classNameName="login-heading-2">Need a login? Click here to create an account and sign up.</h2>
					<Link to="/SignUp">
						<span classNameName="btn btn-primary btn-lg" href="#" role="button">
							Sign up
						</span>
					</Link>
				</form> */}
			</div>
		</div>
	);
};
Login.propTypes = {
	history: PropTypes.object
};

export default withRouter(Login);
