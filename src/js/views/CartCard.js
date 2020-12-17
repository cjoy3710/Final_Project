import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const CartCard = props => {
	// const [cart, setCart] = useState([]);
	const { store, actions } = useContext(Context);
	let currentCart = actions.getCart();

	const removeFromCart = index => {
		actions.removeFromCart(index);
	};

	return (
		<div className="card">
			{/* <div className="card-header">Order Summary</div> */}
			{/* <ul className="list-group list-group-flush"> */}
			{/* {store.cart.map((cart, index) => (
					<li className="list-group-item" key={index} cart={cart} />
				))} */}
			{/* </ul> */}
			<div>{currentCart.length === 0 && <div>Cart is empty</div>}</div>
			<h1>{props.menuItem.item}</h1>
			<h6>${props.menuItem.price}</h6>
			<button
				onClick={() => {
					removeFromCart(props.menuItem.id);
				}}>
				Remove Item
			</button>
		</div>
	);
};
CartCard.propTypes = {
	menuItem: PropTypes.object
};
