//react code in a separate class
import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SeachParams";
import { Router } from '@reach/router';

const App = () => {

  return (
      <div>
        <h1 id="something-important">Adopt-Me</h1>
        <SearchParams />
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
