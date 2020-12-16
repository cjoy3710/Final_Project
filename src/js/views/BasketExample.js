import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function BasketExample() {
	const [cartItems, setCartItems] = useState([]);
	const { store, actions } = useContext(Context);

	return (
		<aside className="block col-1 text-light">
			<h1>Basket Example</h1>
			<div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
			{cartItems.map(item => (
				<div key={index} className="row">
					<div>{props.product.item}</div>
				</div>
			))}
		</aside>
	);
}
BasketExample.propTypes = {
	product: PropTypes.object
};
