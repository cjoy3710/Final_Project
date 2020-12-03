import React from "react";
import Form from "react-bootstrap";
import Button from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<div>
			<div className="container-fluid login-form">
				<h2 className="login-heading">Login to my account</h2>
				<form>
					<div className="form-group">
						<label className="label">Email address</label>
						<input
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
					<button type="submit" className="btn btn-info submit-btn">
						Login
					</button>
					<div>
						<p className="signup-link">
							Need to create an account?{" "}
							<Link to="/SignUp">
								<span classNameName="btn btn-primary btn-lg" href="#" role="button">
									Sign up here.
								</span>
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
}
