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
				<Nav className="mr-auto ">
					<Nav.Link className="nav-link" href="/">
						Home
					</Nav.Link>
					<Nav.Link href="/aboutus">About Us</Nav.Link>
					<Nav.Link href="/menu">Menu / Place Order</Nav.Link>
				</Nav>

				<Button type="button" className="btn login-btn" variant="link" onClick={handleShow}>
					Login / Sign-Up
				</Button>
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
					<Modal.Footer />
				</Modal>
			</Navbar.Collapse>
		</Navbar>
	);
};
