import React from "react";
import { useFirestoreCollectionData, useFirestore } from "reactfire";

import ProjectItem from "../../../components/Admin/Project/ProjectItem";
import { ProjectInterface } from "../../Portfolio/types";

import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Projects() {
	const projectsRef = useFirestore().collection("projects");
	const projectDocs = useFirestoreCollectionData<ProjectInterface>(projectsRef);
	const reorder = (startIndex: number, endIndex: number) => {
		console.log("reorder -> endIndex", endIndex);
		console.log("reorder -> startIndex", startIndex);
		// order > source && order <
	};

	const onDragEnd = (result: any) => {
		// dropped outside the list
		if (!result.destination) {
			return;
		}

		reorder(result.source.index, result.destination.index);
	};

	return (
		<Container>
			<Row>
				<Col sm={12} md={{ span: 3, offset: 9 }} lg={{ span: 2, offset: 10 }}>
					<Link to="/admin/add-project">
						<Button className="mb-3 w-100">
							<i className="fas fa-plus-circle mr-1"></i>
							Add a project
						</Button>
					</Link>
				</Col>
			</Row>

			{projectDocs.map((project: ProjectInterface, index: number) => (
				<div></div>
			))}
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="droppable">
					{(provided, snapshot) => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
							{projectDocs.map((project, index) => (
								<Draggable
									key={index}
									draggableId={index.toString()}
									index={index}
								>
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
										>
											<ProjectItem project={project} />
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</Container>
	);
}
