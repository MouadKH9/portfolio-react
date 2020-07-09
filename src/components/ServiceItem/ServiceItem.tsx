import React from "react";
import { Service } from "../../parts/About/types";
import styled from "styled-components";

export default function ServiceItem({ service }: { service: Service }) {
	return (
		<Container className="text-center p-3">
			<Image src={service.icon} />
			<Title>{service.title}</Title>
			<Description>{service.description}</Description>
		</Container>
	);
}

const Container = styled.div`
	background-color: rgba(255, 255, 255, 0.3);
	border-radius: 10px;
	transition: all 0.3s;
	cursor: default;

	&:hover {
		transform: scale(1.05);
		background-color: rgba(255, 255, 255, 0.4);
	}
`;

const Image = styled.img`
	width: 40%;
`;

const Title = styled.h4`
	color: white;
	margin-top: 10px;
`;

const Description = styled.p`
	color: white;
	font-size: 1.1em;
`;
