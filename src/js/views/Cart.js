import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AboutUsCard } from "./AboutUsCard";
import { Context } from "../store/appContext";

export function Cart() {
	const { store, actions } = useContext(Context);

	return (
		<div className="row">
			<h1>DO YOU UNDERSTAND THE WORDS THAT ARE COMING OUT OF MY MOUTH</h1>
		</div>
	);
}
