import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { MenuCard } from "./MenuCard";
<<<<<<< HEAD
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
=======
import { CartContext } from "./CartContext";

export function Cart() {
	const { store, actions } = useContext(Context);
	const [cart, setCart] = useContext(CartContext);

	return (
		<div>
			<span>itemsn in cart :{cart.length}</span>
			<br />
			<span>total price :0</span>
>>>>>>> 859ef0f40fb534dce42188a38a4475edbe0bbfa0
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
