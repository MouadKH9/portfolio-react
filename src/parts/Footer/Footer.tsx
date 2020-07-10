import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import colors from "../../utils/colors";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoImage from "../../assets/logo-inline.png";

export default function Footer() {
	return (
		<Section>
			<Container>
				<Row>
					<Col md={4}>
						<Title>Location</Title>
						<Text>Tangier, Morocco</Text>
					</Col>
					<Col md={4} className="text-center">
						<Logo src={LogoImage} />
					</Col>
					<Col md={4}>
						<Title>Around the Web</Title>
						<Text>Tangier, Morocco</Text>
					</Col>
				</Row>
			</Container>
		</Section>
	);
}

const Section = styled.div`
	width: 100%;
	background-color: ${colors.dark};
	padding: 50px 0 0 0;
`;

const Title = styled.h3`
	color: white;
	text-align: center;
	font-weight: 700;
	text-transform: uppercase;
`;

const Text = styled.h5`
	color: white;
	text-align: center;
`;

const Logo = styled.img`
	width: 60%;
`;
