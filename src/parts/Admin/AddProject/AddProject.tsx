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

export default function AddProject() {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	const addProject = (event: any) => {
		event.preventDefault();
		const desc = draftToHtml(convertToRaw(editorState.getCurrentContent()));
	};
	return (
		<Container>
			<Form>
				<Row>
					<Col sm={12}>
						<Form.Group controlId="title">
							<Form.Label>Title</Form.Label>
							<Form.Control type="text" placeholder="Title" />
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
					<Col sm={12} md={6}>
						<Form.Group controlId="tags">
							<Form.Label>Tags</Form.Label>
							<Form.Control
								type="text"
								placeholder="Separate your tags with a comma"
							/>
						</Form.Group>
					</Col>
					<Col sm={12} md={6}>
						<Form.Group controlId="link">
							<Form.Label>Link</Form.Label>
							<Form.Control type="text" placeholder="Link" />
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
						>
							Add
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
}
