import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import styled from "styled-components";
import colors from "./utils/colors";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import { isEmail } from "./utils/mailing";
import { useAuth } from "reactfire";

export default function Login() {
	const auth = useAuth();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	const submit = async () => {
		try {
			const status = await auth.signInWithEmailAndPassword(email, password);
			console.log("submit -> response", status);
		} catch (error) {
			setError(true);
		}
	};

	return (
		<Body className="animate-bg">
			<CenteredContainer>
				<Card>
					<Card.Header style={{ backgroundColor: colors.dark }}>
						<Row style={{ alignItems: "center" }}>
							<Col md={3} lg={2}>
								<Logo src={require("./assets/logo-inline.png")} alt="logo" />
							</Col>
							<Col md={{ span: 3, offset: 3 }} lg={{ span: 2, offset: 3 }}>
								<Title>Login</Title>
							</Col>
						</Row>
					</Card.Header>
					<Card.Body>
						<Form>
							<Row>
								<Col md={12} sm={12}>
									<Form.Group>
										<Form.Label>Email</Form.Label>
										<Form.Control
											size="lg"
											type="email"
											placeholder="Email"
											value={email || ""}
											onChange={(event) => setEmail(event.target.value)}
										/>
									</Form.Group>
								</Col>
								<Col md={12} sm={12}>
									<Form.Group>
										<Form.Label>Password</Form.Label>
										<Form.Control
											size="lg"
											type="password"
											placeholder="Email"
											value={password || ""}
											onChange={(event) => setPassword(event.target.value)}
										/>
									</Form.Group>
								</Col>
								<Col sm={12}>
									<Button
										disabled={!email || !password || !isEmail(email)}
										className="w-100"
										onClick={submit}
										variant="dark"
									>
										Send
									</Button>
									{error && <Error>Incorrect credentials.</Error>}
								</Col>
							</Row>
						</Form>
					</Card.Body>
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

const Title = styled.h3`
	color: white;
	font-weight: 200;
	text-transform: uppercase;
`;

const Logo = styled.img`
	width: 150px;
`;

const Error = styled.h6`
	color: ${colors.danger};
	text-align: center;
	margin-top: 5px;
`;
