import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../styles/home.scss";
import { MenuCard } from "./MenuCard";
import { Context } from "../store/appContext";

export function Menu() {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<h2 className="menu-heading">Seasonal Winter Menu</h2>
			<div className="row ">
				{store.menu.map((menu, index) => (
					<MenuCard key={index} menu={menu} />
				))}
			</div>
			<h2 className="order-total m-5">Order Total: ${}</h2>
			<div className="row justify-content-center">
				<button className="btn btn-lg btn-dark place-order-btn mb-5">View Order</button>
			</div>
		</div>
	);
}
