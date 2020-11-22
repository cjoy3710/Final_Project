import React, { useState } from "react";
import { Link } from "react-router-dom";

import CDELogo from "../../img/CDE_Logo_2.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Navbar = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<ul className="navbar bg-transparent d-flex nav-menu">
			<li className="navbar-brand nav-logo">
				<Link to="/">
					<img src={CDELogo} className="card-img" alt="..." />
				</Link>
			</li>
			<li className="nav-item">
				<button type="button" className="btn login-btn" variant="primary" onClick={handleShow}>
					Login / Sign-Up
				</button>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Login Here</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
								<Form.Text className="text-muted">
									Well never share your email with anyone else.
								</Form.Text>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>
							{/* <Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Check me out" />
							</Form.Group> */}
							<Button variant="primary" type="submit">
								Login
							</Button>
						</Form>
					</Modal.Body>
					<Modal.Footer />{" "}
				</Modal>
			</li>
		</ul>
	);
};
