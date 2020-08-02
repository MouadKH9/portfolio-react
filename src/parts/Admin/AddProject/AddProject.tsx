import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import { useHistory } from "react-router-dom";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import styled from "styled-components";
import { ProjectInterface } from "../../Portfolio/types";
import { format } from "date-fns";
import {
	useFirestore,
	useFirestoreCollectionData,
	useStorage,
} from "reactfire";
import { shiftProjects } from "../../../utils/firebaseUtills";
import Tags from "./Tags";

export default function AddProject() {
	const history = useHistory();

	const projectsRef = useFirestore().collection("projects");
	const projectDocs = useFirestoreCollectionData<ProjectInterface>(
		projectsRef.orderBy("order", "desc")
	);
	const storage = useStorage();

	const [title, setTitle] = useState("");
	const [tags, setTags] = useState<string[]>([]);
	const [link, setLink] = useState("");
	const [atStart, setAtStart] = useState(false);
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [imagesAsFile, setImagesAsFile] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);
	const [progress, setProgress] = useState(0);

	const removeTag = (index: number) => () => {
		const clonedTags = Array.from(tags);
		clonedTags.splice(index, 1);
		setTags(clonedTags);
	};

	const addTag = (tag: string) => () => {
		setTags([...tags, tag]);
	};

	const handleImageAsFile = (e: any) => {
		setImagesAsFile(e.target.files);
	};

	const getNextOrder = () => projectDocs[0].order + 1;

	const addProject = async (event: any) => {
		event.preventDefault();
		setLoading(true);
		const description = draftToHtml(
			convertToRaw(editorState.getCurrentContent())
		);
		if (atStart) await shiftProjects(projectsRef.orderBy("order", "desc"), 1);
		const project: ProjectInterface = {
			title,
			description,
			date: format(new Date(), "dd-MM-yyyy"),
			tags,
			images: await getImages(),
			order: atStart ? 1 : getNextOrder(),
		};
		await projectsRef.doc().set(project);
		setLoading(false);
		history.push("/admin");
	};

	const getImages = async () => {
		if (imagesAsFile.length === 0) return [];

		return await uploadImages();
	};

	const uploadImages = (): Promise<string[]> => {
		return new Promise((resolve, reject) => {
			imagesAsFile.forEach((image) => {
				const uploadTask = storage.ref(`images/${image.name}`).put(image);
				uploadTask.on(
					"state_changed",
					(snapshot) => {
						const progress =
							(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
						setProgress(Math.ceil(progress));
					},
					(error) => {
						console.log("AddProject -> error", error);
						reject();
					},
					async () => {
						const downloadURL = await storage
							.ref("images")
							.child(image.name)
							.getDownloadURL();
						resolve(downloadURL);
					}
				);
			});
		});
	};
	return (
		<Container>
			<Form>
				<Row>
					<Col sm={12}>
						<Form.Group controlId="title">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Title"
								value={title}
								onChange={(ev: any) => setTitle(ev.target.value)}
							/>
						</Form.Group>
					</Col>
					<Col sm={12}>
						<Form.Group controlId="description">
							<Form.Label>Description</Form.Label>
							<Editor
								editorState={editorState}
								onEditorStateChange={(state) => setEditorState(state)}
							/>
						</Form.Group>
					</Col>
					<Col sm={12}>
						<Form.Group>
							<Form.File label="Image" custom onChange={handleImageAsFile} />
						</Form.Group>
					</Col>
					<Col sm={12} md={6}>
						<Form.Group controlId="tags">
							<Tags tags={tags} addTag={addTag} removeTag={removeTag} />
						</Form.Group>
					</Col>
					<Col sm={12} md={6}>
						<Form.Group controlId="link">
							<Form.Label>Link</Form.Label>
							<Form.Control
								type="text"
								placeholder="Link"
								value={link}
								onChange={(ev: any) => setLink(ev.target.value)}
							/>
							<TagContainer>
								<Form.Group controlId="formBasicCheckbox">
									<Form.Check
										type="checkbox"
										label="Add at the start"
										onChange={() => setAtStart(!atStart)}
									/>
								</Form.Group>
							</TagContainer>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col sm={12} md={{ span: 6, offset: 3 }}>
						<Button
							variant="primary"
							type="submit"
							className="w-100 my-2"
							onClick={addProject}
							disabled={!title || tags.length === 0 || loading}
						>
							{loading ? (
								<>
									<i className="fas fa-circle-notch fa-spin"></i> {progress}%
								</>
							) : (
								<>Add</>
							)}
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
}

const TagContainer = styled.div`
	padding-top: 17px;
`;
