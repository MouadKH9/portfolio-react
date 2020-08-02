import React, { useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/esm/Form";
import colors from "../../../utils/colors";

export default function Tags(props: {
	tags: string[];
	removeTag: (index: number) => any;
	addTag: (tag: string) => any;
}) {
	const [tagsText, setTagsText] = useState("");

	const tagsKeyUp = (ev: React.KeyboardEvent) => {
		if (ev.key !== ",") return;

		props.addTag(tagsText.substring(0, tagsText.length - 1));
		setTagsText("");
	};

	return (
		<>
			<Form.Label>Tags</Form.Label>
			<Form.Control
				type="text"
				placeholder="Separate your tags with a comma"
				value={tagsText}
				onChange={(ev: any) => setTagsText(ev.target.value)}
				onKeyUp={tagsKeyUp}
			/>
			<TagContainer>
				{props.tags.map((tag, index) => (
					<Tag key={index} onClick={props.removeTag(index)}>
						{tag}
					</Tag>
				))}
				{!props.tags.length && <Info>Your tags will appear here..</Info>}
			</TagContainer>
		</>
	);
}
const Info = styled.span`
	color: lightgray;
`;
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
