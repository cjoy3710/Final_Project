//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.min.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

//render your react application
ReactDOM.render(
	<Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
		<Layout />
	</Auth0Provider>,
	document.querySelector("#app")
);
