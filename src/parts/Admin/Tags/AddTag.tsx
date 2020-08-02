import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";

export default function AddTag({
	addTag,
}: {
	addTag: (name: string, image: string) => any;
}) {
	const [tag, setTag] = useState("");
	const [link, setLink] = useState("");
	const clear = () => {
		setTag("");
		setLink("");
	};

	return (
		<Form>
			<Row style={{ alignItems: "flex-end" }}>
				<Col sm={12} md={3}>
					<Form.Group controlId="tagName">
						<Form.Label>Tag</Form.Label>
						<Form.Control
							type="text"
							placeholder="Tag name"
							value={tag}
							onChange={(ev: any) => setTag(ev.target.value)}
						/>
					</Form.Group>
				</Col>
				<Col sm={12} md={7}>
					<Form.Group controlId="tagLink">
						<Form.Label>Link</Form.Label>
						<Form.Control
							type="text"
							placeholder="Tag link"
							value={link}
							onChange={(ev: any) => setLink(ev.target.value)}
						/>
					</Form.Group>
				</Col>
				<Col sm={12} md={2}>
					<Button
						onClick={(ev: any) => {
							addTag(tag, link);
							clear();
						}}
						className="mb-3 w-100"
					>
						<i className="fas fa-plus-circle mr-1"></i>
						Add a tag
					</Button>
				</Col>
			</Row>
		</Form>
	);
}
