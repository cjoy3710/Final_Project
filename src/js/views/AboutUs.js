import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AboutUsCard } from "./AboutUsCard";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function AboutUs() {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="row justify-content-center">
				<h2 className="about-heading">Creative Dining Experience</h2>
			</div>
			<div className="row justify-content-center">
				<h6 className="about-bio text-center">
					Creative Dining Experience is a take-out only fine dining establishment. With a small, refined menu
					of classic and innovative dishes, we aim to provide bold flavor and joy to your dining experience,
					wherever that may be.
				</h6>
			</div>
			<div className="row justify-content-center">
				{store.us.map((us, index) => (
					<AboutUsCard key={index} us={us} />
				))}
			</div>
			<div className="row justify-content-center">
				<Link to="/menu">
					<h5 className="about-bio text-center">
						Click here to view our menu and place your dinner order tonight.
					</h5>
				</Link>
			</div>
		</div>
	);
}
