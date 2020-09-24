import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something element" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "german shephard",
    }),
    React.createElement(Pet, {
      name: "buddy",
      animal: "Dog",
      breed: "Labrador",
    }),
    React.createElement(Pet, {
      name: "don",
      animal: "Dog",
      breed: "mixed",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
