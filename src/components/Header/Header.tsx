import React from "react";
import { HeaderItem, FullNavbar } from "./extras";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
        <header>
            <Container className="navbar">
                <FullNavbar>
                    <Navbar.Brand href="#">Mouad K</Navbar.Brand>
                    <Nav>
                        {headerItems.map((item: HeaderItem, index: number) => (
                            <Nav.Link href={item.link}>{item.title}</Nav.Link>
                        ))}
                    </Nav>
                </FullNavbar>
            </Container>
        </header>
    );
}
