import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import styled from "styled-components";
import Button from "react-bootstrap/esm/Button";

export default function TagElement({
	index,
	tag,
	onChange,
	deleteTag,
}: {
	index: number;
	tag: { name: string; image: string };
	onChange: (field: "name" | "image", index: number, value: string) => void;
	deleteTag: (index: number) => void;
}) {
	return (
		<Form>
			<Row style={{ alignItems: "center" }}>
				<Col sm={12} md={3}>
					<Form.Group controlId="tagName">
						<Form.Control
							type="text"
							placeholder="Tag name"
							value={tag.name}
							onChange={(ev: any) => onChange("name", index, ev.target.value)}
						/>
					</Form.Group>
				</Col>
				<Col sm={12} md={5}>
					<Form.Group controlId="tagLink">
						<Form.Control
							type="text"
							placeholder="Tag link"
							value={tag.image}
							onChange={(ev: any) => onChange("image", index, ev.target.value)}
						/>
					</Form.Group>
				</Col>
				<Col sm={12} md={2} className="text-center">
					<Image src={tag.image} alt="Not found" />
				</Col>
				<Col sm={12} md={2} className="text-center">
					<Button onClick={() => deleteTag(index)} variant="danger">
						<i className="fas fa-trash"></i>
					</Button>
				</Col>
			</Row>
		</Form>
	);
}

const Image = styled.img`
	width: 30px;
`;
