import styled from "styled-components";

const Divider = styled.div`
    max-width: 15rem;
    padding: 0;
    text-align: center;
    border: none;
    border-top: solid 0.25rem;
    margin: 0 auto;
    margin-top: 2rem;
    border-color: ${(props) => props.theme.fg};

    &::after {
        position: relative;
        top: -0.8em;
        display: inline-block;
        padding: 0 0.25em;
        content: "\f005";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        font-size: 2em;
        color: ${(props) => props.theme.fg};
        background-color: transparent;
    }
`;

export default Divider;
