import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AboutUsCard } from "./AboutUsCard";

import { Context } from "../store/appContext";

export function AboutUs() {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="row">
				{store.us.map((us, index) => (
					<AboutUsCard key={index} us={us} />
				))}
			</div>
		</div>
	);
}
