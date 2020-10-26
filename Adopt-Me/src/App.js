//react code in a separate class
import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SeachParams";
import { Link, Router } from '@reach/router';
import Details from "./Details";

const App = () => {

  return (
      <div>
        <header>
          <Link to='/'>Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
