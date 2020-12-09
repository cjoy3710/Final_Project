import React, {useEffect, useRef} from "react"

export default function Paypal() {
    const paypal = useRef();

    useEffect(() =>{
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create ({
                    intent: "CAPTURE",
                    purchase_units: [
                       {
                           description: "Creative Dining Experience, LLC.",
                           amount: {
                               currency_code:"USD",
                               value: 6.00,
                           },
                       },
                    ],
                });
            },
            onApprove: async (data,actions) => {
                const order = await actions.order.capture();
                console.log(order);
            },
            onError: (err) => {
                console.log(err)
            }
        })
        .render(paypal.current);
    })
}