import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Container from "react-bootstrap/esm/Container";
import styled from "styled-components";

import { useFirestoreDocData, useFirestore } from "reactfire";
import { SiteInfo } from "./types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SocialMediaItem from "./SocialMediaItem";
import { sendEmail } from "../../utils/mailing";

export default function Contact() {
	const infoRef = useFirestore().collection("info").doc("main");
	const siteInfo = useFirestoreDocData<SiteInfo>(infoRef);

	const [name, setName] = useState<string | null>();
	const [number, setNumber] = useState<string | null>();
	const [email, setEmail] = useState<string | null>();
	const [message, setMessage] = useState<string | null>();

	const submit = () => {
		if (!name || !number || !email || !message) return;
		sendEmail({
			name,
			number,
			email,
			message,
		});
	};

	return (
		<GlobalContainer id="portfolio">
			<SectionTitle title="Contact me" theme="light" />
			<Container>
				<Row>
					<Col lg={6} sm={12}>
						<h3 className="text-center mb-3 text-dark">Send me a message</h3>
						<Form>
							<Row>
								<Col md={6} sm={12}>
									<Form.Group>
										<Form.Label>Name *</Form.Label>
										<Form.Control
											size="lg"
											type="text"
											placeholder="Name"
											onChange={(event) => setName(event.target.value)}
										/>
									</Form.Group>
								</Col>
								<Col md={6} sm={12}>
									<Form.Group>
										<Form.Label>Phone number</Form.Label>
										<Form.Control
											size="lg"
											type="text"
											placeholder="Phone number"
											onChange={(event) => setNumber(event.target.value)}
										/>
									</Form.Group>
								</Col>
								<Col md={12} sm={12}>
									<Form.Group>
										<Form.Label>Email *</Form.Label>
										<Form.Control
											size="lg"
											type="email"
											placeholder="Email"
											onChange={(event) => setEmail(event.target.value)}
										/>
									</Form.Group>
								</Col>
								<Col md={12} sm={12}>
									<Form.Group>
										<Form.Label>Your message *</Form.Label>
										<Form.Control
											size="lg"
											as="textarea"
											rows={4}
											type="message"
											placeholder="Message"
											onChange={(event) => setMessage(event.target.value)}
										/>
									</Form.Group>
								</Col>
								<Col sm={12}>
									<Button
										disabled={!name || !email || !message}
										className="w-100"
										onClick={submit}
									>
										Send
									</Button>
								</Col>
							</Row>
						</Form>
					</Col>
					<Col lg={6} sm={12}>
						<h3 className="text-center mb-3 text-dark">Or find me online</h3>
						<div className="p-5">
							{siteInfo.socialMedia &&
								siteInfo.socialMedia.map((social, index) => (
									<SocialMediaItem social={social} key={index} />
								))}
						</div>
					</Col>
				</Row>
			</Container>
		</GlobalContainer>
	);
}

const GlobalContainer = styled.div`
	width: 100%;
	padding: 10px 0 50px 0;
`;
