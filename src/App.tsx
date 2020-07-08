import React, { Suspense } from "react";
import Header from "./parts/Header/Header";

import Display from "./parts/Display/Display";
import Portfolio from "./parts/Portfolio/Portfolio";

import {
	FirebaseAppProvider,
	useFirestoreDocData,
	useFirestore,
	SuspenseWithPerf,
} from "reactfire";

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
			<Suspense fallback="Loading">
				<Header />
				<Display />
				<Portfolio />
			</Suspense>
		</FirebaseAppProvider>
	);
}

export default App;
