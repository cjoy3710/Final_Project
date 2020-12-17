import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const CartCard = props => {
	// const [cart, setCart] = useState([]);
	const { store, actions } = useContext(Context);

	const removeFromCart = id => {
		actions.removeFromCart(id);
	};

	return (
		<div className="card">
			{/* <div className="card-header">Order Summary</div> */}
			{/* <ul className="list-group list-group-flush"> */}
			{/* {store.cart.map((cart, index) => (
					<li className="list-group-item" key={index} cart={cart} />
				))} */}
			{/* </ul> */}
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
