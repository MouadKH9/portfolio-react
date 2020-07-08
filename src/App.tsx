import React from "react";
import Header from "./parts/Header/Header";

import Display from "./parts/Display/Display";
import Portfolio from "./parts/Portfolio/Portfolio";

function App() {
	return (
		<div className="rootContaier">
			<Header />
			<Display />
			<Portfolio />
		</div>
	);
}

export default App;
