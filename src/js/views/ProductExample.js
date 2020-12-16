import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Data from "../store/Data";
import { Context } from "../store/appContext";

export function ProductExample(props) {
	const [cartItems, setCartItems] = useState([]);

	const { product } = props;
	const { store, actions } = useContext(Context);

	const onAdd = product => {
		const exist = cartItems.find(x => x.id === props.product.id);
		if (exist) {
			setCartItems(cartItems.map(x => (x.id === props.product.id ? { ...exist, qty: exist.qty + 1 } : x)));
		} else {
			setCartItems([...cartItems, { product, qty: 1 }]);
		}
	};
	return (
		<div>
			<h3>{props.product.item}</h3>
			<div>${props.product.price}</div>
			<div>
				<button onClick={() => onAdd()}>Add to Cart</button>
			</div>
		</div>
	);
}
ProductExample.propTypes = {
	product: PropTypes.object
};
