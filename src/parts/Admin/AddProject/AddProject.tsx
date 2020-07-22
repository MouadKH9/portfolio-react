import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default function AddProject() {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	const addProject = (event: any) => {
		event.preventDefault();
		const desc = draftToHtml(convertToRaw(editorState.getCurrentContent()));
	};
	return (
		<Container>
			<Form>
				<Form.Group controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" placeholder="Title" />
				</Form.Group>
				<Form.Group controlId="description">
					<Form.Label>Description</Form.Label>
					<Editor
						editorState={editorState}
						onEditorStateChange={(state) => setEditorState(state)}
					/>
				</Form.Group>

				<Form.Group controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" placeholder="Title" />
				</Form.Group>

				<Button variant="primary" type="submit" onClick={addProject}>
					Add
				</Button>
			</Form>
		</Container>
	);
}
