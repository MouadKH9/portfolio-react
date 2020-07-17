import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/esm/Card";
import Container from "react-bootstrap/esm/Container";

export default function AdminCard({
	title,
	children,
}: {
	title: string;
	children: any;
}) {
	return (
		<Body className="animate-bg">
			<CenteredContainer>
				<Card>
					<Header>
						<h3>{title}</h3>
					</Header>
					<Card.Body>{children}</Card.Body>
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

const Header = styled(Card.Header)`
	text-align: center;
	padding: 20px 0px;
`;
