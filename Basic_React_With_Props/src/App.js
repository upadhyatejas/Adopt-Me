//react code in a separate class
import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt-Me</h1>
      <Pet name="luna" animal="dog" breed="havanese" age="11" />
      <Pet name="cheddar" animal="dog" breed="shiba-inu" age="6" />
      <Pet name="doink" animal="cat" breed="mixed" age="5" />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
