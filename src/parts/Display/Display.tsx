import React from "react";
import styled from "styled-components";
import Divider from "../../components/Divider/Divider";

export default function Display() {
    return (
        <DisplayContainer className="animate-bg">
            <TextContainer>
                <Title>Mouad K.</Title>
                <Divider theme={{ fg: "white" }} />
                <Subtitle>
                    Full Stack Web Developer - Software Programmer
                </Subtitle>
            </TextContainer>
        </DisplayContainer>
    );
}

const DisplayContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

const TextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 20px;
`;

const Title = styled.h1`
    color: white;
    font-size: 4.5em;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
`;

const Subtitle = styled.h3`
    text-align: center;
    color: white;
`;
