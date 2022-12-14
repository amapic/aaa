import React from "react";
import { render } from "react-dom";
import Hello, { Rrrr } from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello />
    <h2>Start here {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
