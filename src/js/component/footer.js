import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<div>
		<div className="container contact-info">
			<div>Creative Dining Experience</div>
			<div>Address: 12345 Tropical Drive Miami, FL 33333</div>
			<div>Reservations: (305) 333-3333</div>
		</div>
		<div className="container social-icons">
			<i className="fab fa-facebook-square" />
			<i className="fab fa-twitter-square" />
		</div>
	</div>
);
