import React, { useState, useEffect } from "react";
import { useFirestoreDocData, useFirestore } from "reactfire";
import Container from "react-bootstrap/esm/Container";
import { SiteInfo } from "../../Contact/types";
import TagElement from "./TagElement";
import AddTag from "./AddTag";
import styled from "styled-components";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import UnspecifiedTags from "./UnspecifiedTags";

export default function Tags() {
	const infoRef = useFirestore().collection("info").doc("main");
	const siteInfo = useFirestoreDocData<SiteInfo>(infoRef);

	const [tags, setTags] = useState(siteInfo.tags);

	useEffect(() => {
		infoRef.set({
			tags,
		});
	}, [tags, infoRef]);

	const addTag = (name: string, image: string) => {
		setTags([...tags, { name, image }]);
	};

	const deleteTag = (index: number) => {
		const clonedTags = Array.from(tags);
		clonedTags.splice(index, 1);
		setTags(clonedTags);
	};

	const tagChanged = (
		field: "name" | "image",
		index: number,
		value: string
	) => {
		const clonedTags = Array.from(tags);
		clonedTags[index][field] = value;
		setTags(clonedTags);
	};

	return (
		<Container>
			<Title>Add a tag</Title>
			<AddTag addTag={addTag} />

			<Title>Unspecified tags</Title>
			<UnspecifiedTags
				existingTags={tags.map((tag) => tag.name.toLowerCase())}
			/>

			<Title>Tags</Title>
			<Row style={{ marginBottom: 10 }}>
				<CenterCol sm={12} md={3}>
					<Name>Tag name</Name>
				</CenterCol>
				<CenterCol sm={12} md={5}>
					<Name>Tag link</Name>
				</CenterCol>
				<CenterCol sm={12} md={2}>
					<Name>Preview</Name>
				</CenterCol>
				<CenterCol sm={12} md={2}>
					<Name>Delete</Name>
				</CenterCol>
			</Row>
			{siteInfo.tags.map((tag, index) => (
				<div key={index}>
					<TagElement
						tag={tag}
						index={index}
						onChange={tagChanged}
						deleteTag={deleteTag}
					/>
				</div>
			))}
		</Container>
	);
}

const Title = styled.h5`
	text-align: center;
`;
const CenterCol = styled(Col)`
	text-align: center;
`;

const Name = styled.span`
	font-size: 1.1em;
	font-weight: bold;
`;
