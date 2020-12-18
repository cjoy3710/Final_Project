import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<div className="row justify-content-center">
		<div className="container text-center contact-info">
			<div>Creative Dining Experience</div>
			<div>Address: 12345 Tropical Drive Miami, FL 33333</div>
			<div>Reservations: (305) 333-3333</div>
		</div>
		<div className="container social-icons text-center">
			<i className="fab fa-facebook-square icon-1" />
			<i className="fab fa-twitter-square icon-2" />
		</div>
	</div>
);
