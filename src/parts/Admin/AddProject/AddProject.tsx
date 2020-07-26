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
import colors from "../../../utils/colors";
import styled from "styled-components";
import { ProjectInterface } from "../../Portfolio/types";
import { format } from "date-fns";
import {
	useFirestore,
	useFirestoreCollectionData,
	useStorage,
} from "reactfire";
import { shiftProjects } from "../../../utils/firebaseUtills";

export default function AddProject() {
	const history = useHistory();

	const projectsRef = useFirestore().collection("projects");
	const projectDocs = useFirestoreCollectionData<ProjectInterface>(
		projectsRef.orderBy("order", "desc")
	);
	const storage = useStorage();

	const [title, setTitle] = useState("");
	const [tags, setTags] = useState<string[]>([]);
	const [tagsText, setTagsText] = useState("");
	const [link, setLink] = useState("");
	const [atStart, setAtStart] = useState(false);
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [imageAsFile, setImageAsFile] = useState();
	const [loading, setLoading] = useState(false);
	const [progress, setProgress] = useState(0);

	const tagsKeyUp = (ev: React.KeyboardEvent) => {
		if (ev.key !== ",") return;

		setTags([...tags, tagsText.substring(0, tagsText.length - 1)]);
		setTagsText("");
	};

	const removeTag = (index: number) => () => {
		const clonedTags = Array.from(tags);
		clonedTags.splice(index, 1);
		setTags(clonedTags);
	};

	const handleImageAsFile = (e: any) => {
		const image = e.target.files[0];
		setImageAsFile(image);
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
			image: imageAsFile ? await uploadImage(imageAsFile) : null,
			order: atStart ? 1 : getNextOrder(),
		};
		await projectsRef.doc().set(project);
		setLoading(false);
		history.push("/admin");
	};

	const uploadImage = (file: any): Promise<string | null> => {
		return new Promise((resolve, reject) => {
			const uploadTask = storage.ref(`images/${file.name}`).put(file);
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
						.child(file.name)
						.getDownloadURL();
					resolve(downloadURL);
				}
			);
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
							<Form.Label>Tags</Form.Label>
							<Form.Control
								type="text"
								placeholder="Separate your tags with a comma"
								value={tagsText}
								onChange={(ev: any) => setTagsText(ev.target.value)}
								onKeyUp={tagsKeyUp}
							/>
							<TagContainer>
								{tags.map((tag, index) => (
									<Tag key={index} onClick={removeTag(index)}>
										{tag}
									</Tag>
								))}
								{!tags.length && <Info>Your tags will appear here..</Info>}
							</TagContainer>
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

const Tag = styled.span`
	background-color: ${colors.dark};
	padding: 5px;
	color: white;
	border-radius: 8px;
	margin-right: 5px;
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		background-color: ${colors.lighterDark};
	}
`;

const Info = styled.span`
	color: lightgray;
`;
