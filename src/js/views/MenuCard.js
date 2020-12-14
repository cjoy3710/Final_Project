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
<<<<<<< HEAD
	let [quantity, setQuantity] = useState(0);
=======
	let [quantity, setQuantaty] = useState(0);
>>>>>>> ad8d467305a0f3e568d04eaad5d42a4012afc100
	if (quantity < 1) {
		quantity = 0;
	} else if (quantity > 25) {
		quantity = 25;
	}

	// // DISCOUNT
	// let dafaultDiscount = 5;
	// // let defaultCouponDiscount = quantity * dafaultDiscount ;
	// const [couponDiscount, setCouponDiscount] = useState(dafaultDiscount);
	// console.log(couponDiscount);

	// TOTAL PRICE
	let defaultTotalPrice = generalPrice * quantity;
	console.log(defaultTotalPrice);
	const [totalPrice, setTotalPrice] = useState(generalPrice);

	const [addToCart, setAddToCart] = useState(false);
	console.log(`Add to cart button click ? ${addToCart}`);

	function incrementQuentaty() {
		// EVERYTIME WHEN CLICK PLUS BUTTON IT WILL INCREMENT BY ONE
		// AND TOTAL PRICE WILL BE CHANGE
		// PRICE * QUANITY = TOTAL
<<<<<<< HEAD
		setQuantity(prevQuantity => prevQuantity + 1);
=======
		actions.addToCart(props.menu);
		setQuantaty(prevQuantity => prevQuantity + 1);
>>>>>>> ad8d467305a0f3e568d04eaad5d42a4012afc100
		setTotalPrice(prevPrice => prevPrice + generalPrice);
	}
	function decrementQuantity() {
		setQuantity(prevQuantity => prevQuantity - 1);
		setTotalPrice(prevPrice => prevPrice - generalPrice);
	}
	function handleClick(e) {
		e.preventDefault();
		setAddToCart(prevAddToCart => (prevAddToCart = true));
	}

	//
	// const { store, actions } = useContext(Context);

	// const [cart, setCart] = useState([]);

	// const addToCart = menu => {
	// 	// console.log("we are in business");
	// 	setCart([...cart, menu]);
	// };
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
						<div className="menu-card-buttons">
							<div className="set-quan set-bg">
								<div className="quantaty">
									{props.menu.item} {quantity}
								</div>
								<div className="btns">
									<button className="btn" onClick={incrementQuentaty}>
										+
									</button>
									<button className="btn" onClick={decrementQuantity}>
										-
									</button>
								</div>
							</div>
							{/* <button onClick={() => addToCart()} className="btn btn-dark mr-2">
							<button
								onClick={() => {
									let amount;
									let value = localStorage.getItem(props.menu.item);

									console.log("HELLO CART:", props.menu.item, value);
									if (value === null || value === "0") {
										amount = 1;
									} else {
										value = Number(value);
										amount = value + 1;
									}
									localStorage.setItem(props.menu.item, amount);
									value = localStorage.getItem(props.menu.item);
									console.log("UPDATED CART:", props.menu.item, props.menu.price);
								}}
								className="btn btn-dark mr-2">
								Add to Order ({cart.length})
							</button>
							<button onClick={() => removeFromCart()} className="btn btn-dark mr-2">
								Remove
							</button> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

MenuCard.propTypes = {
	menu: PropTypes.object
};
