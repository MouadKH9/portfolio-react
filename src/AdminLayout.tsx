import React from "react";
import Card from "react-bootstrap/esm/Card";
import styled from "styled-components";
import Container from "react-bootstrap/esm/Container";

export default function AdminLayout() {
	return (
		<Body className="animate-bg">
			<CenteredContainer>
				<Card>
					<Card.Header>Projects Management</Card.Header>
					<Card.Body></Card.Body>
				</Card>
			</CenteredContainer>
		</Body>
	);
}

const Body = styled.div`
	height: 100vh;
	width: 100vw;
`;

const CenteredContainer = styled(Container)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 70%;
`;
