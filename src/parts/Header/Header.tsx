import React from "react";
import {
	HeaderItem,
	FullNavbar,
	HeaderContainer,
	Logo,
	NavButton,
	NavContainer,
} from "./extras";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import InlineLogo from "./../../assets/logo-inline.png";

export default function Header() {
	const headerItems: HeaderItem[] = [
		{
			title: "Portfolio",
			link: "#portfolio",
		},
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Contact",
			link: "#contact",
		},
	];

	return (
		<HeaderContainer>
			<Container className="navbar">
				<FullNavbar>
					<Navbar.Brand href="#">
						<Logo src={InlineLogo} />
					</Navbar.Brand>
					<NavContainer>
						{headerItems.map((item: HeaderItem, index: number) => (
							<NavButton key={index} href={item.link}>
								{item.title}
							</NavButton>
						))}
					</NavContainer>
				</FullNavbar>
			</Container>
		</HeaderContainer>
	);
}
