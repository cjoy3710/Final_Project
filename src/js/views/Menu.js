import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../styles/home.scss";
import { MenuCard } from "./MenuCard";
import { Context } from "../store/appContext";

export function Menu() {
	const { store, actions } = useContext(Context);

	return (
		<div className="row row-cols-1 row-cols-md-3">
			{store.menu.map((menu, index) => (
				<MenuCard key={index} menu={menu} />
			))}
		</div>
	);
}
