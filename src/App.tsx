import React from "react";
import Header from "./parts/Header/Header";

import Display from "./parts/Display/Display";
import Portfolio from "./parts/Portfolio/Portfolio";

import { FirebaseAppProvider, SuspenseWithPerf } from "reactfire";
import Loading from "./components/Loading/Loading";
import About from "./parts/About/About";
import Contact from "./parts/Contact/Contact";

const firebaseConfig = {
	apiKey: "AIzaSyCa0OKjjRPpNlGQy9N6T3_QjGRCDfjtHJI",
	authDomain: "portfolio-70e7c.firebaseapp.com",
	databaseURL: "https://portfolio-70e7c.firebaseio.com",
	projectId: "portfolio-70e7c",
	storageBucket: "portfolio-70e7c.appspot.com",
	messagingSenderId: "508587837695",
	appId: "1:508587837695:web:329ac2a99d54ad18fa24ca",
	measurementId: "G-K8TP700GQH",
};
function App() {
	return (
		<FirebaseAppProvider firebaseConfig={firebaseConfig}>
			<SuspenseWithPerf fallback={<Loading />} traceId="main-suspense">
				<Header />
				<Display />
				<Portfolio />
				<About />
				<Contact />
			</SuspenseWithPerf>
		</FirebaseAppProvider>
	);
}

export default App;
