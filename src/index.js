import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import * as smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

ReactDOM.render(
  <App />,
  document.getElementById("root")
);