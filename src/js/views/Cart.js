import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { MenuCard } from "./MenuCard";
import { CartContext } from "./CartContext";

export function Cart() {
	const { store, actions } = useContext(Context);
	const [cart, setCart] = useContext(CartContext);

	return (
		<div>
			<span>itemsn in cart :{cart.length}</span>
			<br />
			<span>total price :0</span>
		</div>
	);
}
