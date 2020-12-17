import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const CartCard = props => {
	// const [cart, setCart] = useState([]);
	// const { store, actions } = useContext(Context);
	return (
		<div className="card">
			{/* <div className="card-header">Order Summary</div> */}
			{/* <ul className="list-group list-group-flush"> */}
			{/* {store.cart.map((cart, index) => (
					<li className="list-group-item" key={index} cart={cart} />
				))} */}
			{/* </ul> */}
			<h1>{props.menuItem.item}</h1>
			<h6>{props.menuItem.price}</h6>
		</div>
	);
};
CartCard.propTypes = {
	menuItem: PropTypes.object
	// cart: PropTypes.object
};
