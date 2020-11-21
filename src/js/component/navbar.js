import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
<<<<<<< HEAD
		<nav className="navbar navbar-light bg-light mb-3">
=======
		<nav className="navbar  navbar-light bg-light mb-3">
>>>>>>> 12a3a220aacca106b7ca311573a6ac8df33c07dc
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Login</button>
				</Link>
			</div>
		</nav>
	);
};
