import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ProjectInterface } from "../../parts/Portfolio/types";
import styled from "styled-components";
import TagImage from "../TagImage/TagImage";

export default function ProjectDetails({
	show,
	handleClose,
	project,
}: {
	show: boolean;
	handleClose: () => any;
	project: ProjectInterface;
}) {
	const [forceHide, setForceHide] = useState(false);

	return (
		<Modal
			show={show && !forceHide}
			size="xl"
			onHide={() => setForceHide(true)}
		>
			<Modal.Body className="text-center">
				<h3 className="text-center">{project.title}</h3>
				<ImageContainer>
					<img className="w-100" src={project.image} alt="Screenshot" />
				</ImageContainer>
				{project.link && (
					<a target="_blank" rel="noopener noreferrer" href={project.link}>
						<i className="fa fa-link" aria-hidden="true"></i> Link
					</a>
				)}
				<Description>{project.description}</Description>
				<div>
					{project.tags.map((tag: string, index: number) => (
						<TagImage key={index} name={tag} />
					))}
				</div>
			</Modal.Body>
		</Modal>
	);
}

const ImageContainer = styled.div`
	overflow-y: scroll;
	max-height: 55vh;
	width: 70%;
	margin: 0 auto;
`;

const Description = styled.p`
	width: 70%;
	margin: 0 auto;
	text-align: center;
	font-size: 1.2em;
	padding: 10px;
`;
