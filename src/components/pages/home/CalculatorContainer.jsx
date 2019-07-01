import React from "react";
import CalculatorButton from "./CalculatorButton";

const operators = ["+", "-", "*", "/"];

const CalculatorContainer = ({ onOperatorChange }) =>
  operators.map(operator => (
    <CalculatorButton
      onOperatorChange={onOperatorChange}
      key={operator}
      operator={operator}
    />
  ));

export default CalculatorContainer;
