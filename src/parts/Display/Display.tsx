import React from "react";
import colors from "../../utils/colors";
import styled from "styled-components";
import Divider from "../../components/Divider/Divider";

export default function Display() {
    return (
        <DisplayContainer className="animate-bg">
            <TextContainer>
                <Title>Mouad K.</Title>
                <Divider theme={{ bg: colors.primary, fg: "white" }} />
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
`;

const Title = styled.h1`
    color: white;
    font-size: 4.5em;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
`;

const Subtitle = styled.h3`
    color: white;
`;
