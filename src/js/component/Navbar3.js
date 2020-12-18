import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CDELogo from "../../img/CDE_Logo_3.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import app from "../../base";
import { AuthContext } from "../store/AuthContext.js";
import { Context } from "../store/appContext";

export const Navbar3 = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	let logout = "";
	const { currentUser } = useContext(AuthContext);
	const { store, actions } = useContext(Context);
	let currentCart = actions.getCart();

	if (currentUser) {
		logout = (
			<Nav.Link onClick={() => app.auth().signOut()} href="/Login">
				Sign out
			</Nav.Link>
		);
	} else {
		logout = (
			<Nav.Link as={Link} to="/Login">
				Login / Sign-Up
			</Nav.Link>
		);
	}

	return (
		<Navbar collapseOnSelect expand="lg" variant="dark" className="main-navbar">
			<Navbar.Brand as={Link} to="/">
				<img
					src={CDELogo}
					width="100px"
					height="100px"
					className="nav-logo d-inline-block align-top"
					alt="React Bootstrap logo"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto menu-bar">
					<Nav.Link as={Link} to="/">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="/aboutus">
						About Us
					</Nav.Link>
					<Nav.Link as={Link} to="/menu">
						Menu / Order
					</Nav.Link>
					<Nav.Link as={Link} to="/cart">
						Cart ({currentCart.length})
					</Nav.Link>
					{logout}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
