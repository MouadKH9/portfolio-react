import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";

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

export default function AddProject() {
	const [title, setTitle] = useState("");
	const [tags, setTags] = useState<string[]>([]);
	const [tagsText, setTagsText] = useState("");
	const [link, setLink] = useState("");
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

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

	const getNextOrder = ()

	const addProject = (event: any) => {
		event.preventDefault();
		const description = draftToHtml(
			convertToRaw(editorState.getCurrentContent())
		);

		const project: ProjectInterface = {
			title,
			description,
			date: format(new Date(), "dd-MM-yyyy"),
			tags,
			image: "",
			order: getNextOrder(),
		};
		console.log("addProject -> project", project);
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
								onChange={(ev: any) =>
									setTitle(ev.target.value)
								}
							/>
						</Form.Group>
					</Col>
					<Col sm={12}>
						<Form.Group controlId="description">
							<Form.Label>Description</Form.Label>
							<Editor
								editorState={editorState}
								onEditorStateChange={(state) =>
									setEditorState(state)
								}
							/>
						</Form.Group>
					</Col>
					<Col sm={12} md={6}>
						<Form.Group controlId="tags">
							<Form.Label>Tags</Form.Label>
							<Form.Control
								type="text"
								placeholder="Separate your tags with a comma"
								value={tagsText}
								onChange={(ev: any) =>
									setTagsText(ev.target.value)
								}
								onKeyUp={tagsKeyUp}
							/>
							<TagContainer>
								{tags.map((tag, index) => (
									<Tag onClick={removeTag(index)}>{tag}</Tag>
								))}
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
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col sm={12} md={{ span: 6, offset: 3 }}>
						<Button
							variant="primary"
							type="submit"
							className="w-100 my-2"
							onClick={addProject}>
							Add
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
