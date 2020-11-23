import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function AboutUsCard(props) {
	const { store, actions } = useContext(Context);
	let us = actions.getUs();
	return (
		<div>
			<div className="card">
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
<<<<<<< HEAD
					<h5 className="card-title">{props.us.name}</h5>
					<p className="card-text">work</p>
=======
					<h5 className="card-title">Hello</h5>
					<p className="card-text">Hello</p>
>>>>>>> d006fe9d7e6105cad0751b5bc3c961933c5df6a1
				</div>
			</div>
		</div>
	);
}

<<<<<<< HEAD
AboutUsCard.propTypes = {
	us: PropTypes.object
};
=======
// AboutUs.propTypes = {
// 	us: PropTypes.object
// };
>>>>>>> d006fe9d7e6105cad0751b5bc3c961933c5df6a1
