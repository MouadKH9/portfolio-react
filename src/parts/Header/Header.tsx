import React, { useEffect, useState } from "react";
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
import colors from "../../utils/colors";

export default function Header() {
	const [showBackground, setShowBackground] = useState(window.scrollY > 300);
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

	const listenToScroll = () => {
		setShowBackground(window.scrollY > 300);
	};

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);

		return () => {
			window.removeEventListener("scroll", listenToScroll);
		};
	}, []);

	return (
		<HeaderContainer color={showBackground ? colors.dark : "transparent"}>
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
