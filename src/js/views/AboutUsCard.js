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
		// <<<<<<< HEAD
		// 		<div className="container card-deck">
		// 			<CardDeck className="about-items">
		// 				<Card style={{ width: "18rem", margin: "20px" }}>
		// 					<Card.Img variant="left" src={props.us.img} />
		// 					<Card.Body>
		// 						<Card.Title>{props.us.name}</Card.Title>
		// 						<Card.Text>{props.us.background}</Card.Text>
		// 					</Card.Body>
		// 				</Card>
		// 				{/* <Card>
		//                     <Card.Img variant="top" src="holder.js/100px160" />
		//                     <Card.Body>
		//                         <Card.Title></Card.Title>
		//                         <Card.Text>

		//                         </Card.Text>
		//                     </Card.Body>
		//                                    </Card> */}
		// 				{/* <Card>
		//                     <Card.Img variant="top" src="holder.js/100px160" />
		//                     <Card.Body>
		//                         <Card.Title>Card title</Card.Title>
		//                         <Card.Text>
		//                             This is a wider card with supporting text below as a natural lead-in to
		//                             additional content. This card has even longer content than the first to
		//                             show that equal height action.
		//       </Card.Text>
		//                     </Card.Body>
		//                     <Card.Footer>
		//                         <small className="text-muted">Last updated 3 mins ago</small>
		//                     </Card.Footer> */}
		// 				{/* </Card> */}
		// 			</CardDeck>
		// 			{/* // <Card style={{ width: "18rem", margin: "20px" }}>
		// 			// 	<Card.Img variant="top" src={props.us.img} />
		// 			// 	<Card.Body>
		// 			// 		<Card.Title>{props.us.name}</Card.Title>
		// 			// 		<Card.Text>{props.us.background}</Card.Text>
		// 			// 	</Card.Body>
		// 			// </Card> */}
		// =======
		// 		<div>
		// <<<<<<< HEAD
		<div className="card">
			<img src={rigoImage} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.us.name}</h5>
				<p className="card-text">{props.us.background}</p>
>>>>>>> 8b53db8cada9a6f0cebc58fa6b09350ec5e91f3e
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
