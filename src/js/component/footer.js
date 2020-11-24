import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<div className="container">
		<nav className="navbar fixed-bottom navbar-expand-lg navbar-dark text-white bg-dark">
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
					<li className="nav-item">
						<Link className="nav-link" to="/menu">
							Menu
						</Link>
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
