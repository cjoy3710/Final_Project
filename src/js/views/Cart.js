import React, { useContext, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { MenuCard } from "./MenuCard";
import PayPal from "../component/PayPal";
import { PaypalButtons } from "../component/PayPal";
import { CartCard } from "./CartCard";

export function Cart() {
	const { store, actions } = useContext(Context);

	let [checkout, setCheckOut] = useState(false);
	let currentCart = actions.getCart();
	console.log(currentCart);

	let totalPrice = 0;
	let tax = 0.07;
	let calculateTotal = () => {
		currentCart.map((menuItem, index) => {
			totalPrice += parseInt(menuItem.price);
		});
		return (totalPrice += totalPrice * tax);
	};

	return (
		<div>
			<div className="row justify-content-center">
				{/* map over cart to create the individual items */}
				{/* <CartCard /> */}
				{currentCart.map((menuItem, index) => (
					// <li className="list-group-item" key={index} cart={cart} />
					<CartCard key={index} menuItem={menuItem} />
				))}
				<div />${calculateTotal().toFixed(2)}
			</div>
			<div>
				{checkout ? (
					<PaypalButtons />
				) : (
					// <div ref={paypalRef} />
					<button
						className="btn
					btn-dark
					
					cart-btn"
						onClick={() => {
							setCheckOut(true);
						}}>
						Checkout
					</button>
				)}
			</div>
		</div>
	);
}

/* import { CartContext } from "./CartContext";

// export function Cart() {
// 	const { store, actions } = useContext(Context);
// 	const [cart, setCart] = useContext(CartContext);

// 	return (
// 		<div>
// 			<span>itemsn in cart :{cart.length}</span>
// 			<br />
// 			<span>total price :0</span>
// 		</div>
// 	);
// }
// export default Cart;

// // <div
// // className="row row-cols-1 row-cols-md-3">
// // 	{store.cart.map((menu, index) => (
// // 		<MenuCard key={index} menu={menu} />
// // 	))}
// // </div> */
Cart.propTypes = {
	menu: PropTypes.object,
	cart: PropTypes.object
};
