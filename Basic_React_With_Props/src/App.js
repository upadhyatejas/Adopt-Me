//react code in a separate class
const Pet = ({ name, animal, breed, age }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed),
    React.createElement("h3", {}, age),
  ]);
};
const App = () => {
  return React.createElement("div", { id: "something-is-up" }, [
    React.createElement("h1", { id: "Adopt-Me" }, "Adopt-Me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "havanese",
      age: "3",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "cockatiel",
      age: "4",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Persian",
      age: "7",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
