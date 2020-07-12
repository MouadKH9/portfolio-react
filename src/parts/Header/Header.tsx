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
import { Link } from "react-scroll";

export default function Header() {
	const [showBackground, setShowBackground] = useState(window.scrollY > 200);
	const [showLogo, setShowLogo] = useState(true);
	const [active, setActive] = useState("");

	const headerItems: HeaderItem[] = [
		{
			title: "Portfolio",
			link: "portfolio",
		},
		{
			title: "About",
			link: "about",
		},
		{
			title: "Contact",
			link: "contact",
		},
	];

	const listenToScroll = () => {
		setShowBackground(window.scrollY > 200);
		setShowLogo(
			window.scrollY < 200 ||
				(window.scrollY >= 200 && window.innerHeight > 650)
		);
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
					{showLogo && (
						<Navbar.Brand href="#">
							<Logo src={InlineLogo} />
						</Navbar.Brand>
					)}
					<NavContainer>
						{headerItems.map((item: HeaderItem, index: number) => (
							<NavButton
								key={index}
								className={item.link === active ? "activeLink" : ""}
							>
								<Link
									onSetActive={() => setActive(item.link)}
									to={item.link}
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
								>
									{item.title}
								</Link>
							</NavButton>
						))}
					</NavContainer>
				</FullNavbar>
			</Container>
		</HeaderContainer>
	);
}
