// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import CDELogo from "../../img/CDE_Logo_2_small.jpg";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// export const Navbar = () => {
// 	const [show, setShow] = useState(false);
// 	const handleClose = () => setShow(false);
// 	const handleShow = () => setShow(true);

// 	return (
// 		<div>
// 			<ul className="navbar bg-transparent d-flex nav-menu">
// 				<li className="navbar-brand nav-logo">
// 					<Link to="/">
// 						<img src={CDELogo} className="card-img" alt="..." />
// 					</Link>
// 				</li>
// 			</ul>
// 			{/* <ul className="nav d-flex nav-menu justify-content-end">
// 				<li className="nav-item">
// 					<a className="nav-link active" href="#">
// 						Active
// 					</a>
// 				</li>
// 				<li className="nav-item">
// 					<a className="nav-link" href="#">
// 						Link
// 					</a>
// 				</li>
// 				<li className="nav-item">
// 					<a className="nav-link" href="#">
// 						Link
// 					</a>
// 				</li>
// 				<li className="nav-item">
// 					<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
// 						Disabled
// 					</a>
// 				</li>
// 			</ul> */}
// 			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
// 				<button
// 					className="navbar-toggler"
// 					type="button"
// 					data-toggle="collapse"
// 					data-target="#navbarNav"
// 					aria-controls="navbarNav"
// 					aria-expanded="false"
// 					aria-label="Toggle navigation">
// 					<span className="navbar-toggler-icon" />
// 				</button>
// 				<div className="collapse navbar-collapse" id="navbarNav">
// 					<ul className="navbar-nav justify-content-end">
// 						<li className="nav-item">
// 							<Link className="nav-link" to="/">
// 								Home
// 							</Link>
// 						</li>
// 						<li className="nav-item">
// 							<a className="nav-link">Menu</a>
// 						</li>
// 						<li className="nav-item">
// 							<Link className="nav-link" to="/aboutus">
// 								About Us
// 							</Link>
// 						</li>
// 						<li className="nav-item">
// 							<Link className="nav-link" to="/aboutus">
// 								Place Order
// 							</Link>
// 						</li>
// 					</ul>
// 				</div>
// 			</nav>
// 			<li className="nav-item">
// 				<button type="button" className="btn login-btn" variant="primary" onClick={handleShow}>
// 					Login / Sign-Up
// 				</button>
// 				<Modal show={show} onHide={handleClose}>
// 					<Modal.Header closeButton>
// 						<Modal.Title>Login Here</Modal.Title>
// 					</Modal.Header>
// 					<Modal.Body>
// 						<Form>
// 							<Form.Group controlId="formBasicEmail">
// 								<Form.Label>Email address</Form.Label>
// 								<Form.Control type="email" placeholder="Enter email" />
// 								<Form.Text className="text-muted">
// 									Well never share your email with anyone else.
// 								</Form.Text>
// 							</Form.Group>

// 							<Form.Group controlId="formBasicPassword">
// 								<Form.Label>Password</Form.Label>
// 								<Form.Control type="password" placeholder="Password" />
// 							</Form.Group>
// 							{/* <Form.Group controlId="formBasicCheckbox">
// 								<Form.Check type="checkbox" label="Check me out" />
// 							</Form.Group> */}
// 							<Button variant="primary" type="submit">
// 								Login
// 							</Button>
// 						</Form>
// 					</Modal.Body>
// 					<Modal.Footer />{" "}
// 				</Modal>
// 			</li>
// 		</div>
// 	);
// };
