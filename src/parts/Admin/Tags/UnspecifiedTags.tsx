import React from "react";
import styled from "styled-components";
import colors from "../../../utils/colors";
import { useFirestoreCollectionData, useFirestore } from "reactfire";
import { ProjectInterface } from "../../Portfolio/types";

export default function UnspecifiedTags({
	existingTags,
}: {
	existingTags: string[];
}) {
	const projectDocs = useFirestoreCollectionData<ProjectInterface>(
		useFirestore().collection("projects")
	);

	const tags = projectDocs
		.map((project) => [...project.tags.map((tag) => tag.toLowerCase())])
		.flat()
		.filter((tag) => !existingTags.includes(tag));

	return (
		<TagContainer>
			{tags.map((tag, index) => (
				<Tag key={index}>{tag}</Tag>
			))}
			{!tags.length && <Info>All your tags are good to go!</Info>}
		</TagContainer>
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
