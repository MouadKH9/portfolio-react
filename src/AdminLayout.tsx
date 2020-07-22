import React from "react";
import AdminCard from "./components/Admin/AdminCard/AdminCard";
import { useFirestoreCollectionData, useFirestore } from "reactfire";
import { ProjectInterface } from "./parts/Portfolio/types";
import ProjectItem from "./components/Admin/Project/ProjectItem";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

export default function AdminLayout() {
	const projectsRef = useFirestore().collection("projects");
	const projectDocs = useFirestoreCollectionData<ProjectInterface>(projectsRef);
	return (
		<AdminCard title="Projects Management">
			<Container>
				<Row>
					<Col sm={12} md={{ span: 2, offset: 10 }}>
						<Button className="mb-3 w-100">
							<i className="fas fa-plus-circle mr-1"></i>
							Add a project
						</Button>
					</Col>
				</Row>

				{projectDocs.map((project: ProjectInterface, index: number) => (
					<div>
						<ProjectItem project={project} />
					</div>
				))}
			</Container>
		</AdminCard>
	);
}
