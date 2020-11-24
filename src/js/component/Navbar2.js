import React, { useState } from "react";
import { Link } from "react-router-dom";

import CDELogo from "../../img/CDE_Logo_2_small.jpg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Navbar2 = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Navbar>
			<Navbar.Brand href="/">
				<img
					src={CDELogo}
					width="150"
					height="100"
					className="d-inline-block align-top"
					alt="React Bootstrap logo"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
				</Nav>
				<Button className="login-btn" variant="">
					Login / Sign-up
				</Button>
			</Navbar.Collapse>
		</Navbar>
	);
};
