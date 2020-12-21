//react code in a separate class
import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SeachParams.jsx";
import { Link, Router } from "@reach/router";
import Details from "./Details.jsx";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
