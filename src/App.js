import React, { useState, useRef, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchParams from "./SeachParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
