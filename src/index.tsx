import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import web3 from "./global/web3client";

require("./index.css");

// expose web3 to console
(window as any).web3 = web3;

ReactDOM.render(
  <App />,
  document.getElementById("root") as HTMLElement,
);
