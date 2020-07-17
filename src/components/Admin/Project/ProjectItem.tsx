import React from "react";
import { ProjectInterface } from "../../../parts/Portfolio/types";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import styled from "styled-components";

export default function ProjectItem({
	project,
}: {
	project: ProjectInterface;
}) {
	return (
		<Row style={{ marginBottom: 10, alignItems: "center" }}>
			<Col lg={10} md={8} sm={12}>
				<h5>
					<Handle className="fas fa-grip-lines mr-2 handle"></Handle>
					{project.title}
				</h5>
			</Col>
			<Col lg={2} md={4} sm={12}>
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

const Handle = styled.i`
	cursor: pointer;
`;
