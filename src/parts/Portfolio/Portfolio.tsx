import React, { useState } from "react";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { ProjectInterface } from "./types";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import { useFirestoreCollectionData, useFirestore } from "reactfire";

export default function Portfolio() {
	const [showAll, setShowAll] = useState(false);

	const projectsRef = useFirestore().collection("projects");
	const projects = useFirestoreCollectionData<ProjectInterface>(projectsRef);

	return (
		<PortfolioContainer id="portfolio">
			<SectionTitle title="Portfolio" theme="light" />
			<Container fluid>
				<Row>
					{projects
						.slice(0, showAll ? projects.length : 3)
						.map((project, index) => (
							<Col key={index} sm={12} md={4} className="mb-2">
								<PortfolioItem project={project} />
							</Col>
						))}
				</Row>
				{projects.length > 3 && (
					<Row>
						<Col sm={{ offset: 5, span: 2 }}>
							<Button
								onClick={() => setShowAll(!showAll)}
								variant="outline-primary"
								className="w-100 my-3"
							>
								{showAll ? "Show less" : "Show more"}
							</Button>
						</Col>
					</Row>
				)}
			</Container>
		</PortfolioContainer>
	);
}

const PortfolioContainer = styled.div`
	width: 100%;
`;
