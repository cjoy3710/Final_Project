import React, { useState, useEffect, useRef, useContext } from "react";
import { Context } from "../store/appContext";
import calculateTotal from "../views/Cart";

export function PaypalButtons() {
	const paypalRef = useRef();
	const { store, actions } = useContext(Context);
	let subtotalPrice = 0;
	const tax = 0.07;
	let totalPrice = 0;
	let taxPrice = 0;
	let currentCart = actions.getCart();

	let calculateTotal = () => {
		currentCart.map((menuItem, index) => {
			totalPrice += parseInt(menuItem.price);
		});

		return (totalPrice += totalPrice * tax);
	};

	useEffect(() => {
		window.paypal
			.Buttons({
				createOrder: (data, actions, err) => {
					return actions.order.create({
						intent: "CAPTURE",
						purchase_units: [
							{
								description: "Creative Dining Experience, LLC.",
								amount: {
									currency_code: "USD",
									value: calculateTotal()
								}
							}
						]
					});
				},
				onApprove: async (data, actions) => {
					const order = await actions.order.capture();
					// console.log(order);
				},
				onError: err => {
					console.log(err);
				}
			})
			.render(paypalRef.current);
	}, []);

	return (
		<div>
			<div ref={paypalRef} />
		</div>
	);
}
