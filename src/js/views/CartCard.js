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
				{store.menu.map((menu, index) => (
					<li className="list-group-item" key={index} menu={menu} />
				))}
			</ul>
		</div>
	);
};
CartCard.propTypes = {
	menu: PropTypes.object,
	cart: PropTypes.object
};
