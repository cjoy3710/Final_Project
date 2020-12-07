import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { rigoImage } from "../../img/rigo-baby.jpg";

export function AboutUsCard(props) {
	const { store, actions } = useContext(Context);
	let us = actions.getUs();
	return (
<<<<<<< HEAD
		<div>
			<div className="card">
				<img src={rigoImage} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.us.name}</h5>
					<p className="card-text">{props.us.background}</p>
				</div>
=======
		<div className="card about-cards text-center">
			<img src={props.us.img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.us.name}</h5>
				<p className="card-text">{props.us.background}</p>
>>>>>>> 3de2e9a14c87a3f584bb52166890a31bd504002e
			</div>
		</div>
	);
}

AboutUsCard.propTypes = {
	us: PropTypes.object
};
