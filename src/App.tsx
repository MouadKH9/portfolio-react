import React from "react";
import Header from "./parts/Header/Header";

import Display from "./parts/Display/Display";
import Portfolio from "./parts/Portfolio/Portfolio";

import { FirebaseAppProvider, SuspenseWithPerf } from "reactfire";
import Loading from "./components/Loading/Loading";
import About from "./parts/About/About";
import Contact from "./parts/Contact/Contact";
import Footer from "./parts/Footer/Footer";
import firebaseConfig from "./firebase-config.json";

function App() {
	return (
		<FirebaseAppProvider firebaseConfig={firebaseConfig}>
			<SuspenseWithPerf fallback={<Loading />} traceId="main-suspense">
				<Header />
				<Display />
				<Portfolio />
				<About />
				<Contact />
				<Footer />
			</SuspenseWithPerf>
		</FirebaseAppProvider>
	);
}

export default App;
