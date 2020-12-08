import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { MenuCard } from "./MenuCard";

export function Cart() {
	const { store, actions } = useContext(Context);

	return (
        <div>
            
        </div>


        // <div 
        // className="row row-cols-1 row-cols-md-3">
		// 	{store.cart.map((menu, index) => (
		// 		<MenuCard key={index} menu={menu} />
		// 	))}
		// </div>
	);
}
