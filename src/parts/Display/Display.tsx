import React from "react";
import colors from "../../utils/colors";
import styled from "styled-components";
import DynamicText from "./DynamicText";
import Divider from "../../components/Divider/Divider";

export default function Display() {
    return (
        <DisplayContainer>
            <TextContainer>
                <Title>Mouad K.</Title>
                <Divider theme={{ bg: colors.primary, fg: "white" }} />
                <DynamicText />
            </TextContainer>
        </DisplayContainer>
    );
}

const DisplayContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${colors.primary};
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
    font-weight: 700;
`;
