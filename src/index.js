import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const REACT_VERSION = React.version;

ReactDOM.render(<App />, document.querySelector("#root"));

ReactDOM.render(REACT_VERSION, document.querySelector("#rversion"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
