import React from "react";
import styled from "styled-components";

export default function Loading() {
	return (
		<Container>
			<LoadingText>Loading</LoadingText>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
`;

const LoadingText = styled.h1`
	text-align: center;
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
