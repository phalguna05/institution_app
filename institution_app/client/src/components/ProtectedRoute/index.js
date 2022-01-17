/* eslint-disable quotes */
import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ children, ...rest }) {
	const state = useSelector((tempstate) => tempstate.login);

	return (
		<Route
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...rest}
			render={({ location }) =>
				state.isLoggedIn ? (
					children
				) : (
					<Navigate to={{ pathname: "/login", state: { from: location } }} />
				)
			}
		/>
	);
}
export default ProtectedRoute;
