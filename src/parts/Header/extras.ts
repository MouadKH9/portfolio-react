import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import colors from "../../utils/colors";
import Nav from "react-bootstrap/Nav";

export interface HeaderItem {
	title: string;
	link: string;
}

export const HeaderContainer = styled.header`
	position: fixed;
	width: 100%;
	background-color: ${(props) => props.color};
	z-index: 1;
	transition: all 0.3s;
`;

export const FullNavbar = styled(Navbar)`
	width: 100%;
	justify-content: space-between;

	@media (max-width: 650px) {
		flex-direction: column;
	}
`;

export const Logo = styled.img`
	max-height: 50px;
`;

export const NavContainer = styled(Nav)`
	background-color: rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	padding: 0;
`;

export const NavButton = styled(Nav.Link)`
	color: white !important;
	font-size: 20px;
	text-transform: uppercase;
	font-weight: 600;
	padding: 10px 20px !important ;

	&:nth-child(1) {
		border-radius: 10px 0 0 10px;
	}
	&:last-child {
		border-radius: 0 10px 10px 0;
	}

	&:hover {
		color: ${colors.dark};
		background-color: rgba(255, 255, 255, 0.3);
	}
`;
