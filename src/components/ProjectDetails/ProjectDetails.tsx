import React from "react";
import Modal from "react-bootstrap/Modal";
import { ProjectInterface } from "../../parts/Portfolio/types";
import styled from "styled-components";
import TagImage from "../TagImage/TagImage";
import parse from "html-react-parser";
export default function ProjectDetails({
	show,
	handleClose,
	project,
}: {
	show: boolean;
	handleClose: () => any;
	project: ProjectInterface;
}) {
	return (
		<div onClick={(e) => e.stopPropagation()}>
			<Modal show={show} size="xl" onHide={handleClose}>
				<Modal.Body className="text-center">
					<h3 className="text-center">{project.title}</h3>
					<ImageContainer>
						<img className="w-100" src={project.image || ""} alt="Screenshot" />
					</ImageContainer>
					{project.link && (
						<a target="_blank" rel="noopener noreferrer" href={project.link}>
							<i className="fa fa-link" aria-hidden="true"></i> Link
						</a>
					)}
					<Description>{parse(project.description)}</Description>
					<div>
						{project.tags?.map((tag: string, index: number) => (
							<TagImage key={index} name={tag} />
						))}
					</div>
				</Modal.Body>
			</Modal>
		</div>
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
