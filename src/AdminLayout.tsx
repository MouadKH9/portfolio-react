import React from "react";
import AdminCard from "./components/Admin/AdminCard/AdminCard";
import { useFirestoreCollectionData, useFirestore } from "reactfire";
import { ProjectInterface } from "./parts/Portfolio/types";
import ProjectItem from "./components/Admin/Project/ProjectItem";
import Button from "react-bootstrap/esm/Button";

export default function AdminLayout() {
	const projectsRef = useFirestore().collection("projects");
	const projectDocs = useFirestoreCollectionData<ProjectInterface>(projectsRef);
	console.log("AdminLayout -> projectDocs", projectDocs);
	return (
		<AdminCard title="Projects Management">
			<Button className="my-2">
				<i className="fas fa-plus-circle mr-1"></i>
				Add a project
			</Button>

			{projectDocs.map((project: ProjectInterface, index: number) => (
				<div>
					<ProjectItem project={project} />
				</div>
			))}
		</AdminCard>
	);
}
