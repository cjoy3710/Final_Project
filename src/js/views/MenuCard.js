import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { Context } from "../store/appContext";
import FoodImg3 from "../../img/food-img-3.jpg";

export function MenuCard(props) {
	const { store, actions } = useContext(Context);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// GENERAL PRICE
	let defaultGeneralPrice = props.menu.price;
	const [generalPrice, setGeneralPrice] = useState(defaultGeneralPrice);

	// QUANTITY
	let [quantity, setQuantity] = useState(0);
	if (quantity < 1) {
		quantity = 0;
	} else if (quantity > 25) {
		quantity = 25;
	}

	// TOTAL PRICE
	let defaultTotalPrice = generalPrice * quantity;
	// console.log(defaultTotalPrice);
	const [totalPrice, setTotalPrice] = useState(generalPrice);

	function incrementQuentity() {
		setQuantity(prevQuantity => prevQuantity + 1);
	}

	function decrementQuantity() {
		setQuantity(prevQuantity => prevQuantity - 1);
		setTotalPrice(prevPrice => prevPrice - generalPrice);
	}

	//
	// const { store, actions } = useContext(Context);

	// const [cart, setCart] = useState([]);

	const addToCart = menu => {
		// console.log("we are in business");
		// setCart([...cart, menu]);
		actions.addToCart(menu);
	};
	// const removeFromCart = menuToRemove => {
	// 	setCart(cart.filter(menu => menu !== menuToRemove));
	// };
	return (
		<div>
			<div className="card-deck">
				<div className="card text-center">
					<img src={props.menu.img} className="card-img-top" alt="..." onClick={handleShow} />
					<Modal size="lg" show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title style={{ textAlign: "center", width: "100%" }}>{props.menu.item}</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<img className="modal-img w-100" src={props.menu.img} />
						</Modal.Body>
					</Modal>
					<div className="card-body menu-card-body">
						<h5 className="card-title">{props.menu.item}</h5>
						<p className="card-text">${props.menu.price}</p>
						<p className="card-text">{props.menu.description}</p>
					</div>
					<button
						onClick={e => {
							e.preventDefault();
							addToCart(props.menu);
						}}
						className="btn btn-dark add-to-order-btn">
						Add to Order
					</button>
				</div>
			</div>
		</div>
	);
}

MenuCard.propTypes = {
	menu: PropTypes.object
};
