import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { ProjectInterface } from "./types";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import { useFirestoreDocData, useFirestore } from "reactfire";

export default function Portfolio() {
	const [projects, setProjects] = useState<ProjectInterface[]>([]);
	const [showAll, setShowAll] = useState(false);

	const ref = useFirestore().collection("projects").get();
	ref.then((data) => console.log(data));

	return (
		<PortfolioContainer id="portfolio">
			<SectionTitle title="Portfolio" />
			<Container fluid>
				<Row>
					{projects
						.slice(0, showAll ? projects.length : 3)
						.map((project) => (
							<Col sm={12} md={4} className="mb-2">
								<PortfolioItem project={project} />
							</Col>
						))}
				</Row>
				<Row>
					<Col sm={{ offset: 5, span: 2 }}>
						<Button
							onClick={() => setShowAll(!showAll)}
							variant="outline-primary"
							className="w-100 my-3">
							{showAll ? "Show less" : "Show more"}
						</Button>
					</Col>
				</Row>
			</Container>
		</PortfolioContainer>
	);
}

const PortfolioContainer = styled.div`
	width: 100%;
`;
