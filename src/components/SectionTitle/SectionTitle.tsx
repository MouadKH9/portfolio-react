import React from "react";
import styled from "styled-components";
import Divider from "./../Divider/Divider";
import colors from "../../utils/colors";

export default function SectionTitle({
	title,
	theme,
}: {
	title: string;
	theme: "primary" | "light";
}) {
	return (
		<>
			<Title color={theme === "light" ? colors.dark : colors.light}>
				{title}
			</Title>
			<Divider
				theme={{
					fg: theme === "light" ? colors.dark : colors.light,
					bg: theme === "light" ? "white" : colors.primary,
				}}
			/>
		</>
	);
}
const Title = styled.h1`
	color: ${(props) => props.color};
	text-align: center;
	font-size: 3em;
	font-weight: 800;
	text-transform: uppercase;
	margin-top: 20px;
`;
