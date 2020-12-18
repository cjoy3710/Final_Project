import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const CartCard = props => {
	// const [cart, setCart] = useState([]);
	const { store, actions } = useContext(Context);
	let currentCart = actions.getCart();

	// little change
	// little change

	const removeFromCart = index => {
		actions.removeFromCart(index);
	};

	return (
		<div className="row justify-content-center">
			<div className="card menu-item-card">
				{/* <div className="card-header">Order Summary</div> */}
				{/* <ul className="list-group list-group-flush"> */}
				{/* {store.cart.map((cart, index) => (
					<li className="list-group-item" key={index} cart={cart} />
				))} */}
				{/* </ul> */}
				<div>{currentCart.length === 0 && <div>Cart is empty</div>}</div>
				<h6>
					{props.index + 1}) {props.menuItem.item}
				</h6>
				<h6>${props.menuItem.price}</h6>
				<button
					className="btn btn-dark btn-small remove-item-btn"
					onClick={() => {
						removeFromCart(props.index);
					}}>
					Remove Item
				</button>
			</div>
		</div>
	);
};
CartCard.propTypes = {
	menuItem: PropTypes.object,
	index: PropTypes.number
};
