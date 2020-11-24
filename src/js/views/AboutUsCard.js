import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "react-bootstrap/Card";

export function AboutUsCard(props) {
	const { store, actions } = useContext(Context);
	let us = actions.getUs();
	return (
		<div>
			<Card style={{ width: "18rem", margin: "20px" }}>
				<Card.Img variant="top" src={props.us.img} />
				<Card.Body>
					<Card.Title>{props.us.name}</Card.Title>
					<Card.Text>{props.us.background}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

AboutUsCard.propTypes = {
	us: PropTypes.object
};
