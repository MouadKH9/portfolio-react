import React from "react";
import AdminCard from "./components/Admin/AdminCard/AdminCard";
import { useFirestoreCollectionData, useFirestore } from "reactfire";
import { ProjectInterface } from "./parts/Portfolio/types";
import ProjectItem from "./components/Admin/Project/ProjectItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function AdminLayout() {
	const projectsRef = useFirestore().collection("projects");
	const projects = useFirestoreCollectionData<ProjectInterface>(projectsRef);

	const onDragEnd = (result: any) => {
		// dropped outside the list
		if (!result.destination) {
			return;
		}

		const items = reorder(
			projects,
			result.source.index,
			result.destination.index
		);
		console.log("onDragEnd -> items", items);
	};

	return (
		<AdminCard title="Projects Management">
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="droppable">
					{(provided: any, snapshot: any) => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
							{projects.map((project, index) => (
								<Draggable
									key={index}
									draggableId={index.toString()}
									index={index}
								>
									{(provided: any, snapshot: any) => (
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
		</AdminCard>
	);
}
// a little function to help us with reordering the result
const reorder = (
	projects: ProjectInterface[],
	startIndex: number,
	endIndex: number
) => {
	const result = Array.from(projects);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};
