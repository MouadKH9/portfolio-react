import React from "react";
import styled from "styled-components";
import "./loading.css";

export default function Loading() {
	return (
		<Container>
			<div className="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
`;
