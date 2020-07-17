import React, { useState } from "react";
import { ProjectInterface } from "../../parts/Portfolio/types";
import "./PortfolioItem.css";
import TagImage from "../TagImage/TagImage";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import styled from "styled-components";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

export default function PortfolioItem({
	project,
}: {
	project: ProjectInterface;
}) {
	const [showDetails, setShowDetails] = useState(false);

	const clicked = () => {
		setShowDetails(true);
	};

	const handleClose = () => {
		setShowDetails(false);
	};

	return (
		<ItemContainer onClick={clicked}>
			<OverlayTrigger
				placement="top"
				overlay={
					<Tooltip id={`tooltip-${project.title}`}>
						<DescriptionText>{project.description}</DescriptionText>
					</Tooltip>
				}
				trigger={["hover", "focus"]}
			>
				<div className="laptop">
					<div className="laptop-screen">
						<div className="laptop-content">
							<img
								className="img-fluid"
								src={project.image}
								alt=""
								data-top="0"
								style={{ top: 0 }}
							/>
						</div>
					</div>
					<div className="laptop-base">
						<div className="laptop-trackpad"></div>
					</div>
				</div>
			</OverlayTrigger>
			<h3 className="text-center bold mt-3 text-dark">{project.title}</h3>
			<div>
				{project.tags?.map((tag: string, index: number) => (
					<TagImage key={index} name={tag} />
				))}
			</div>
			<ProjectDetails
				project={project}
				show={showDetails}
				handleClose={handleClose}
			/>
		</ItemContainer>
	);
}

const ItemContainer = styled.div`
	cursor: pointer;
	padding: 10px;
	transition: all 0.3s;

	&:hover {
		background-color: #ececec;
	}
`;

const DescriptionText = styled.p`
	max-width: 150px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: center;
`;
