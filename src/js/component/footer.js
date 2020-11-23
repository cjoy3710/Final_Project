import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<div className="container">
		<nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
			{/* <a className="navbar-brand" href="#">
				Navbar
			</a> */}
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link className="nav-link" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<a className="nav-link">Menu</a>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/aboutus">
							About Us
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/aboutus">
							Place Order
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
);
