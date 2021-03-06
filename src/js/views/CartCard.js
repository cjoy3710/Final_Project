import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const CartCard = props => {
	// const [cart, setCart] = useState([]);
	const { store, actions } = useContext(Context);
	let currentCart = actions.getCart();
	const [value, setValue] = useState("");
	const [comment, setComment] = useState([]);

	let handleSubmit = e => {
		e.preventDefault();
		addComment(value);
		setValue("");
	};

	const addComment = text => {
		const updatedComment = [...comment, { text }];
		setComment(updatedComment);
	};

	const addToCart = menu => {
		actions.addToCart(menu);
	};

	const removeFromCart = index => {
		actions.removeFromCart(index);
	};

	let [count, setCount] = useState(0);
	if (count < 1) {
		count = 0;
	} else if (count > 25) {
		count = 25;
	}

	return (
		<div className="row justify-content-center">
			<div className="card menu-item-card">
				{/* <div className="card-header">Order Summary</div> */}
				{/* <ul className="list-group list-group-flush"> */}
				{/* {store.cart.map((cart, index) => (
					<li className="list-group-item" key={index} cart={cart} />
				))} */}
				{/* </ul> */}
				<div>{currentCart.length === 0 && <div>Cart is empty</div>}</div>
				<h6 className="menu-item-text">
					{props.index + 1}) {props.menuItem.item} ${props.menuItem.price}
				</h6>

				<div>
					{/* <form onSubmit={handleSubmit}>
						<input
							type="text"
							className="form-control input"
							value={value}
							placeholder="Special instructions..."
							onChange={e => setValue(e.target.value)}
						/>
						{comment.map((comment, index) => (
							<span key={index}>
								<div className="container">
									<p className="special-instructions-text">
										<strong>{comment.text}</strong>
									</p>
								</div>
							</span>
						))}
					</form> */}

					<button
						className="btn btn-dark btn-small remove-item-btn"
						onClick={() => {
							removeFromCart(props.index);
						}}>
						Remove Item
					</button>
				</div>
			</div>
		</div>
	);
};

CartCard.propTypes = {
	menuItem: PropTypes.object,
	index: PropTypes.number
};
