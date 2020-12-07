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
		<div>
			<div className="card">
				<img src={rigoImage} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.us.name}</h5>
					<p className="card-text">{props.us.background}</p>
				</div>
			</div>
		</div>
		// =======
		// 			<Card style={{ width: "18rem", margin: "20px" }}>
		// 				<Card.Img variant="top" src={props.us.img} />
		// 				<Card.Body>
		// 					<Card.Title>{props.us.name}</Card.Title>
		// 					<Card.Text>{props.us.background}</Card.Text>
		// 				</Card.Body>
		// 			</Card>
		// >>>>>>> e3731c0854cfa6eed7734447bec20d9ca9df3162
		// >>>>>>> 3355beb380049144718e2864df7bec81b509baa8
		// 		</div>
	);
}

AboutUsCard.propTypes = {
	us: PropTypes.object
};
