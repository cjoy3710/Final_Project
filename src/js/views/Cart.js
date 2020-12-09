import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { MenuCard } from "./MenuCard";
import PayPal from "../component/PayPal";

export function Cart() {
	// const { store, actions } = useContext(Context);

	let { checkout, setCheckOut } = useState(false);

	return (
		<div className="cart">
			{checkout ? (
				<PayPal />
			) : (
				<button
					onClick={() => {
						setCheckOut(true);
					}}>
					Checkout
				</button>
			)}
		</div>
	);
}
export default Cart;

// <div
// className="row row-cols-1 row-cols-md-3">
// 	{store.cart.map((menu, index) => (
// 		<MenuCard key={index} menu={menu} />
// 	))}
// </div>
