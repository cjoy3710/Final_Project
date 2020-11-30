import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AboutUsCard } from "./AboutUsCard";
import { Context } from "../store/appContext";
import Jumbotron from "react-bootstrap/Jumbotron";

export function AboutUsJumbotron() {
	return (
		<div className="row">
			<Jumbotron fluid>
				<Container>
					<h1>Fluid jumbotron</h1>
					<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
				</Container>
			</Jumbotron>
		</div>
	);
}
