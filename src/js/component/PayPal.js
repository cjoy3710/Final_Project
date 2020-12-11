import React, { useState, useEffect, useRef } from "react";

export function PaypalButtons() {
	const paypalRef = useRef();

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
									value: 6.0
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
