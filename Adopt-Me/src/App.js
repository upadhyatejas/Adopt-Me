//react code in a separate class
import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SeachParams";
import { Link, Router } from "@reach/router";
import Details from "./Details";
import Routerinfo from "./Routerinfo";
import ThemeContext from './ThemeContext';

const App = () => {
  const themeHook = useState("peru");
  return (
    <ThemeContext.Provider value={themeHook}>
      {console.log("the theme hook is given by")}
      {console.log(themeHook)}
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
          <Routerinfo path="/routerinfo/" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
