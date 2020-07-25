import React from "react";
import { ProjectInterface } from "../../../parts/Portfolio/types";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

export default function ProjectItem({
	project,
}: {
	project: ProjectInterface;
}) {
	return (
		<Row style={{ marginBottom: 10, alignItems: "center" }}>
			<Col lg={6} md={6} sm={12}>
				<h5>{project.title}</h5>
			</Col>
			<Col lg={2} md={3} sm={6}>
				{project.date}
			</Col>
			<Col lg={2} md={3} sm={6}>
				{project.views || 0} Views
			</Col>
			<Col lg={2} md={3} sm={6} style={{ textAlign: "right" }}>
				<Button style={{ marginLeft: 10 }} variant="primary">
					<i className="fas fa-pen"></i>
				</Button>
				<Button style={{ marginLeft: 10 }} variant="danger">
					<i className="fas fa-trash"></i>
				</Button>
			</Col>
		</Row>
	);
}
