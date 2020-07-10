import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import colors from "../../utils/colors";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoImage from "../../assets/logo-inline.png";

export default function Footer() {
	return (
		<>
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
						<Col md={4} className="text-center">
							<Title>Around the Web</Title>
							<ul className="list-inline mb-0">
								<li className="list-inline-item">
									<a
										className="btn btn-outline-light btn-social text-center rounded-circle"
										href="https://www.facebook.com/Mouaaad29">
										<i className="fab fa-fw fa-facebook-f"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a
										className="btn btn-outline-light btn-social text-center rounded-circle"
										href="https://github.com/MouadKH9/">
										<i className="fab fa-fw fa-github"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a
										className="btn btn-outline-light btn-social text-center rounded-circle"
										href="https://www.linkedin.com/in/MouadK">
										<i className="fab fa-fw fa-linkedin-in"></i>
									</a>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</Section>
			<CopyrightRow>
				Copyright © Mouad K {new Date().getFullYear()}
			</CopyrightRow>
		</>
	);
}

const Section = styled.div`
	width: 100%;
	background-color: ${colors.dark};
	padding: 60px 0;
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

const CopyrightRow = styled.div`
	background-color: ${colors.darkerDark};
	padding: 10px;
	color: white;
	text-align: center;
`;
