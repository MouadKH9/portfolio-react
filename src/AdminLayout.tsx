import React from "react";
import AdminCard from "./components/Admin/AdminCard/AdminCard";
import Projects from "./parts/Admin/Projects/Projects";
import { Switch, Route, Redirect } from "react-router-dom";
import AddProject from "./parts/Admin/AddProject/AddProject";

export default function AdminLayout() {
	return (
		<AdminCard title="Projects Management">
			<Switch>
				<Route path="/admin/projects" component={Projects} />
				<Route path="/admin/add-project" component={AddProject} />
				<Route
					path="*"
					exact={true}
					component={() => <Redirect to="/admin/projects" />}
				/>
			</Switch>
		</AdminCard>
	);
}
