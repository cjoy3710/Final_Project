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

<<<<<<< HEAD
	return (
		<div className="row justify-content-center">
			{store.menu.map((menu, index) => (
				<CartCard key={index} menu={menu} />
			))}
			{checkout ? (
				<PaypalButtons />
			) : (
				// <div ref={paypalRef} />
				<button
					className="btn
=======
    return (
        <div>
        <div className="row justify-content-center">
            <CartCard />
        </div>
        <div>
            {checkout ? (
                <PaypalButtons />
            ) : (
                    // <div ref={paypalRef} />
                    <button
                        className="btn
>>>>>>> b8588549c033e82d1e34a5b93332398baacb3ae6
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
