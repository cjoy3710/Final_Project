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
		logout = <Nav.Link href="/Login">Login / Sign-Up</Nav.Link>;
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
					{/* </Nav>
				<Nav> */}
					{/* <Nav.Link href="#deets">More deets</Nav.Link> */}
					{/* <Nav.Link eventKey={2} href="#memes">
						Login / Sign-up
					</Nav.Link> */}
					{logout}
					{/* <Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton> </Modal.Header>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src={RestImg1} alt="First slide" />
								{/* <Carousel.Caption>
					
				</Carousel.Caption> */}
					{/* </Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={FoodImg1} alt="Third slide" /> */}
					{/* <Carousel.Caption>
					<h3>Second slide label</h3>
				</Carousel.Caption> */}
					{/* </Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={FoodImg2} alt="Third slide" /> */}
					{/* <Carousel.Caption>
					<h3>Third slide label</h3>
				</Carousel.Caption> */}
					{/* </Carousel.Item>
						</Carousel> */}
					{/* <Modal.Title>Login Here</Modal.Title>
						</Modal.Header>
						<Modal.Body> */}
					{/* <Form>
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
								</Form.Group> */}
					{/* <Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Check me out" />
							</Form.Group> */}
					{/* <Button variant="primary" type="submit">
									Login
								</Button>
							</Form>
						</Modal.Body> */}
					{/* <Modal.Footer /> */}
					{/* </Modal> */}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
