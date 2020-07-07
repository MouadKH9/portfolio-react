import React from "react";
import Header from "./parts/Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./parts/Display/Display";

function App() {
    return (
        <div className="rootContaier">
            <Header />
            <Display />
        </div>
    );
}

export default App;
