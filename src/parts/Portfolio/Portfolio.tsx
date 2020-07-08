import React, { useState } from "react";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { ProjectInterface } from "./types";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";

export default function Portfolio() {
	const [projects, setProjects] = useState<ProjectInterface[]>([
		{
			id: 1,
			title: "My Portfolio",
			description: "My own portfolio",
			tags: ["typescript", "react"],
			date: "08-07-2020",
			image: "https://via.placeholder.com/400",
			link: "http://www.mouadk.xyz/",
		},
		{
			id: 2,
			title: "My Handy",
			description: "Mobile app to connect handy workers to customers",
			tags: ["angular", "spring", "ionic"],
			date: "01-06-2019",
			image: "https://via.placeholder.com/400",
		},
		{
			id: 3,
			title: "My Handy",
			description: "Mobile app to connect handy workers to customers",
			tags: ["angular", "spring", "ionic"],
			date: "01-06-2019",
			image: "https://via.placeholder.com/400",
		},
		{
			id: 3,
			title: "My Handy",
			description: "Mobile app to connect handy workers to customers",
			tags: ["angular", "spring", "ionic"],
			date: "01-06-2019",
			image: "https://via.placeholder.com/400",
		},
		{
			id: 3,
			title: "My Handy",
			description: "Mobile app to connect handy workers to customers",
			tags: ["angular", "spring", "ionic"],
			date: "01-06-2019",
			image: "https://via.placeholder.com/400",
		},
	]);
	const [showAll, setShowAll] = useState(false);

	return (
		<PortfolioContainer>
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
