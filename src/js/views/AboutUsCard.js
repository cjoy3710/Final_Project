import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

export function AboutUsCard(props) {
	const { store, actions } = useContext(Context);
	let us = actions.getUs();
	return (
		<div className="container card-deck">
			<CardDeck className="about-items">
				<Card style={{ width: "18rem", margin: "20px" }}>
					<Card.Img variant="left" src={props.us.img} />
					<Card.Body>
						<Card.Title>{props.us.name}</Card.Title>
						<Card.Text>{props.us.background}</Card.Text>
					</Card.Body>
				</Card>
				{/* <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                    </Card.Body>
                                   </Card> */}
				{/* <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer> */}
				{/* </Card> */}
			</CardDeck>
			{/* // <Card style={{ width: "18rem", margin: "20px" }}>
			// 	<Card.Img variant="top" src={props.us.img} />
			// 	<Card.Body>
			// 		<Card.Title>{props.us.name}</Card.Title>
			// 		<Card.Text>{props.us.background}</Card.Text>
			// 	</Card.Body>
			// </Card> */}
		</div>
	);
}

AboutUsCard.propTypes = {
	us: PropTypes.object
};
