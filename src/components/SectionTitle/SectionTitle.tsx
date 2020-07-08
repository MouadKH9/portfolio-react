import React from "react";
import styled from "styled-components";
import Divider from "./../Divider/Divider";
import colors from "../../utils/colors";

export default function SectionTitle({ title }: { title: string }) {
	return (
		<>
			<Title>{title}</Title>
			<Divider theme={{ fg: colors.dark, bg: "white" }} />
		</>
	);
}
const Title = styled.h1`
	color: ${colors.dark};
	text-align: center;
	font-size: 3em;
	font-weight: 800;
	text-transform: uppercase;
	margin-top: 20px;
`;
