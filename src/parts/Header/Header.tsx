import React from "react";
import {
    HeaderItem,
    FullNavbar,
    HeaderContainer,
    Logo,
    NavButton,
} from "./extras";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
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
                    <Nav>
                        {headerItems.map((item: HeaderItem, index: number) => (
                            <Nav.Link href={item.link}>
                                <NavButton>{item.title}</NavButton>
                            </Nav.Link>
                        ))}
                    </Nav>
                </FullNavbar>
            </Container>
        </HeaderContainer>
    );
}
