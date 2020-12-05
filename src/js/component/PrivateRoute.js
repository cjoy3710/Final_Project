import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../store/AuthContext.js";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
	const { currentUser } = useContext(AuthContet);

	return (
		<Route
			{...rest}
			render={routeProps => (!!currentUser ? <RouteComponent {...routeProps} /> : <Redirect to={"/Login"} />)}
		/>
	);
};
export default PrivateRoute;
