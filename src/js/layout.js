import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Menu } from "./views/Menu";
import { Cart } from "./views/Cart";
import { CartProvider } from "./views/CartContext";

import Login from "./views/Login";
import SignUp from "./views/SignUp";
import { AuthProvider } from "./store/AuthContext";
import PrivateRoute from "./component/PrivateRoute";

import { AboutUs } from "./views/AboutUs";
// import { Single } from "./views/single";
import injectContext from "./store/appContext";
// import { Navbar } from "./component/navbar";

// import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Navbar3 } from "./component/Navbar3";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<AuthProvider>
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar3 />
						<Switch>
							<Route exact path="/Login">
								<Login />
							</Route>
							<Route exact path="/SignUp">
								<SignUp />
							</Route>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/menu">
								<Menu />
							</Route>
							<Route exact path="/aboutus">
								<AboutUs />
							</Route>
							<Route exact path="/cart">
<<<<<<< HEAD
								<Cart />
=======
								{/* <CartProvider> */}
								<Cart />
								{/* </CartProvider> */}
>>>>>>> 336e448a70615d23ce884b7b207a6f998054c900
							</Route>
						</Switch>
						{/* <Footer /> */}
					</ScrollToTop>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
};

export default injectContext(Layout);
