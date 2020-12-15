import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const CartCard = props => {
	const [cart, setCart] = useState([]);
	const { store, actions } = useContext(Context);
	return (
		<div className="card">
			<div className="card-header">Featured</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">{props.menu.item}</li>
			</ul>
		</div>
	);
};
CartCard.propTypes = {
	menu: PropTypes.object,
	cart: PropTypes.object
};
