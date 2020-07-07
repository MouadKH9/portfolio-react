import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import colors from "../../utils/colors";

export interface HeaderItem {
    title: string;
    link: string;
}

export const HeaderContainer = styled.header`
    position: absolute;
    width: 100%;
`;

export const FullNavbar = styled(Navbar)`
    width: 100%;
    justify-content: space-between;
`;

export const Logo = styled.img`
    max-height: 50px;
`;

export const NavButton = styled.span`
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;

    &:hover {
        color: ${colors.dark};
    }
`;
