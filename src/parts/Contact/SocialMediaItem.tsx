import React from "react";
import styled from "styled-components";
import { SocialMedia } from "./types";

export default function SocialMediaItem({ social }: { social: SocialMedia }) {
	return (
		<Container>
			<Icon src={social.icon} alt={social.title} />
			<Title>Find me on {social.title}</Title>
		</Container>
	);
}

const Icon = styled.img`
	width: 50px;
	margin-right: 10px;
`;

const Container = styled.div`
	border-radius: 20px;
	display: flex;
	align-items: center;
	width: 70%;
	margin: 25px auto;
	cursor: pointer;
	padding: 5px;
	transition: all 0.3s;

	&:hover {
		color: #17b971;
		transform: scale(1.02);
	}
`;

const Title = styled.h4``;
