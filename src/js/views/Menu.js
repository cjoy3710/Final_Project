import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../styles/home.scss";
import { MenuCard } from "./MenuCard";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function Menu() {
	const { store, actions } = useContext(Context);
	const [cart, setCart] = useState([]);
	// let total = actions.getTotal();

	return (
		<div>
			<h2 className="menu-heading">Seasonal Winter Menu</h2>
			<div className="row menu-page ">
				{/* <MenuCard /> */}
				{store.menu.map((menu, index) => (
					<MenuCard key={index} menu={menu} />
				))}
			</div>
			{/* <h2 className="order-total m-5">Order Total: ${}</h2> */}
			<div className="row justify-content-center">
				<Link to="/cart">
					<button className="btn btn-lg btn-dark place-order-btn mb-5">Ready to Order </button>
				</Link>
			</div>
		</div>
	);
}
