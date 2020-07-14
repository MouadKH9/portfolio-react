import React from "react";

import { useAuth } from "reactfire";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainLayout from "./MainLayout";
import AdminLayout from "./AdminLayout";
import Login from "./Login";

function App() {
	const auth = useAuth();

	return (
		<Router>
			<Route path="/" exact component={MainLayout} />
			<Route
				path="/login"
				render={() => (!auth.currentUser ? <Login /> : <Redirect to="/" />)}
			/>
			<Route
				path="/admin"
				render={() =>
					auth.currentUser ? <AdminLayout /> : <Redirect to="/" />
				}
			/>
			{/* {!auth.currentUser ? (
				) : (
					<Redirect to="/" />
			)} */}
		</Router>
	);
}

export default App;
