import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

export interface HeaderItem {
    title: string;
    link: string;
}

export const FullNavbar = styled(Navbar)`
    width: 100%;
    justify-content: space-between;
`;
