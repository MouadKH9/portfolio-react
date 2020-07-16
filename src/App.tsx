import React from "react";

import { useUser } from "reactfire";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainLayout from "./MainLayout";
import AdminLayout from "./AdminLayout";
import Login from "./Login";

function App() {
	const user = useUser();

	return (
		<Router>
			<Route path="/" exact component={MainLayout} />
			<Route
				path="/login"
				render={() => (!user ? <Login /> : <Redirect to="/admin" />)}
			/>
			<Route
				path="/admin"
				render={() => (user ? <AdminLayout /> : <Redirect to="/" />)}
			/>
		</Router>
	);
}

export default App;
