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

	let subtotalPrice = 0;
	const tax = 0.07;
	let totalPrice = 0;
	let taxPrice = 0;

	const calculateSubTotal = () => {
		currentCart.map((menuItem, index) => {
			subtotalPrice += parseInt(menuItem.price);
		});
		return subtotalPrice;
	};
	let calculateTaxes = () => {
		currentCart.map((menuItem, index) => {
			taxPrice += parseInt(menuItem.price);
		});

		return (taxPrice = taxPrice * tax);
	};
	let calculateTotal = () => {
		currentCart.map((menuItem, index) => {
			totalPrice += parseInt(menuItem.price);
		});

		return (totalPrice += totalPrice * tax);
	};

	return (
		<div>
			<div className="col justify-content-center">
				{currentCart.map((menuItem, index) => (
					<CartCard key={index} menuItem={menuItem} index={index} />
				))}
				<div className="text-light">{currentCart.length === 0 && <div>Your cart is empty</div>}</div>

				<div>
					{currentCart.length > 0 && (
						<div className="text-light">
							<div>Subtotal: ${calculateSubTotal()}</div>
							<div>Tax: ${calculateTaxes().toFixed(2)}</div>
							<div>Total: ${calculateTotal().toFixed(2)}</div>
						</div>
					)}
				</div>
			</div>
			<div>
				{currentCart.length > 0 && (
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
