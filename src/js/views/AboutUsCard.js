import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function AboutUsCard(props) {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="card">
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.us.name}</h5>
					<p className="card-text">{props.us.background}</p>
				</div>
			</div>
		</div>
	);
}

AboutUs.propTypes = {
	us: PropTypes.object
};
