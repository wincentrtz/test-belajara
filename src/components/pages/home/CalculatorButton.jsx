import React from "react";

const CALCULATOR_MAPPER = {
  "+": "btn btn-success",
  "-": "btn btn-danger",
  "*": "btn btn-info",
  "/": "btn btn-warning"
};

const CalculatorButton = ({ operator, onOperatorChange }) => (
  <button
    onClick={() => onOperatorChange(operator)}
    className={CALCULATOR_MAPPER[operator]}
  >
    {operator}
  </button>
);

export default CalculatorButton;
