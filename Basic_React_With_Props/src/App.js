//react code in a separate class
import { ANIMALS } from "@frontendmasters/pet";
import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SeachParams";

const App = () => {
  console.log("hello world");
  return (
    <div>
      <h1 id="something-important">Adopt-Me</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
