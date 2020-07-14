import React from "react";

import Header from "./parts/Header/Header";
import Display from "./parts/Display/Display";
import Portfolio from "./parts/Portfolio/Portfolio";
import About from "./parts/About/About";
import Contact from "./parts/Contact/Contact";
import Footer from "./parts/Footer/Footer";

export default function MainLayout() {
	return (
		<>
			<Header />
			<Display />
			<Portfolio />
			<About />
			<Contact />
			<Footer />
		</>
	);
}
