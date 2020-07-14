import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseAppProvider, SuspenseWithPerf } from "reactfire";
import "./index.css";
import "./custom.scss";
import firebaseConfig from "./firebase-config.json";
import Loading from "./components/Loading/Loading";

ReactDOM.render(
	<React.StrictMode>
		<FirebaseAppProvider firebaseConfig={firebaseConfig}>
			<SuspenseWithPerf fallback={<Loading />} traceId="main-suspense">
				<App />
			</SuspenseWithPerf>
		</FirebaseAppProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
