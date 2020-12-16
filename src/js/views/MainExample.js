import React, { useContext } from "react";
import PropTypes from "prop-types";
import Data from "../store/Data";
import { ProductExample } from "./ProductExample";
import { Context } from "../store/appContext";

export function MainExample(props) {
	const { product } = props;
	const { store, actions } = useContext(Context);

	return (
		<main className="block col-2 text-light">
			<h2>Products</h2>
			<div className="row">
				{store.product.map((product, index) => (
					<ProductExample key={index} product={product} />
				))}
			</div>
		</main>
	);
}
MainExample.propTypes = {
	product: PropTypes.object
};
