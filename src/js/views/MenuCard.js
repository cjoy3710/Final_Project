import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import FoodImg3 from "../../img/food-img-3.jpg";

export function MenuCard(props) {
	const { store, actions } = useContext(Context);

	const [cart, setCart] = useState([]);

	const addToCart = menu => {
		console.log("we are in business");
		setCart([...cart, menu]);
	};
	const removeFromCart = menuToRemove => {
		setCart(cart.filter(menu => menu !== menuToRemove));
	};
	return (
		<div>
			<div className="card-deck">
				<div className="card">
					<img src={FoodImg3} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{props.menu.item}</h5>
						<p className="card-text">${props.menu.price}</p>
						<button onClick={() => addToCart()} className="btn btn-dark">
							Add to Cart ({cart.length})
						</button>
						<button onClick={() => removeFromCart()} className="btn btn-dark">
							Remove
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

MenuCard.propTypes = {
	menu: PropTypes.object
};
