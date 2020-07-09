import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Container from "react-bootstrap/esm/Container";
import styled from "styled-components";
import colors from "../../utils/colors";

import { useFirestoreDocData, useFirestore } from "reactfire";
import { SiteInfo } from "./types";

export default function About() {
	const infoRef = useFirestore().collection("info").doc("main");
	const siteInfo = useFirestoreDocData<SiteInfo>(infoRef);

	return (
		<GlobalContainer id="portfolio">
			<SectionTitle title="About" theme="primary" />
			<Container>
				<ParagraphTitle>Who am I?</ParagraphTitle>
				<Description
					dangerouslySetInnerHTML={{ __html: siteInfo.description }}
				></Description>
				<ParagraphTitle>Services</ParagraphTitle>
			</Container>
		</GlobalContainer>
	);
}

const GlobalContainer = styled.div`
	width: 100%;
	background-color: ${colors.primary};
`;

const ParagraphTitle = styled.h4`
	color: white;
`;

const Description = styled.p`
	font-size: 1.2em;
	color: white;
`;
