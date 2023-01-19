"use strict";

const App = () => {
  const [valueOne, setValueOne] = (0, React.useState)(null);
  const [valueTwo, setValueTwo] = (0, React.useState)(null);
  const [sum, setSum] = (0, React.useState)(0);
  const [operator, setOperator] = (0, React.useState)("");
  const [hasClicked, setHasClicked] = (0, React.useState)(false);

  const inputOneElement = React.createElement("input", {
    name: "valueOne",
    placeholder: "enter first number",
    value: valueOne,
    onChange: (e) => setValueOne(e.target.value),
  });

  const inputTwoElement = React.createElement("input", {
    name: "valueTwo",
    placeholder: "enter second number",
    value: valueTwo,
    onChange: (e) => setValueTwo(e.target.value),
  });

  const reset = () => {
    setValueOne("");
    setValueTwo("");
    setSum(0);
    setHasClicked(false);
  };

  const addButtonElement = React.createElement(
    "button",
    {
      onClick: () => {
        setSum(Number(valueOne) + Number(valueTwo));
        setOperator("added to");
        setHasClicked(true);
      },
    },
    "Add"
  );
  const multipleButtonElement = React.createElement(
    "button",
    {
      onClick: () => {
        setSum(Number(valueOne) * Number(valueTwo));
        setOperator("multipled by");
        setHasClicked(true);
      },
    },
    "Multiple"
  );
  const substractButtonElement = React.createElement(
    "button",
    {
      onClick: () => {
        setSum(Number(valueOne) - Number(valueTwo));
        setOperator("subtracted by");
        setHasClicked(true);
      },
    },
    "Subtract"
  );
  const divideButtonElement = React.createElement(
    "button",
    {
      onClick: () => {
        setSum(Number(valueOne) / Number(valueTwo));
        setOperator("divided by");
        setHasClicked(true);
      },
    },
    "Divide"
  );

  const clearButtonElement = React.createElement(
    "button",
    {
      onClick: reset,
    },
    "Clear"
  );

  return React.createElement(
    "div",
    { style: { display: "flex", flexDirection: "column", width: "50vw" } },
    null,
    "Enter your numbers and select the operator:",
    hasClicked && `${valueOne} ${operator} ${valueTwo} is ${sum}`,
    inputOneElement,
    inputTwoElement,
    addButtonElement,
    substractButtonElement,
    multipleButtonElement,
    divideButtonElement,
    clearButtonElement
  );
};
ReactDOM.render(
  React.createElement(App, null),
  document.getElementById("root")
);
