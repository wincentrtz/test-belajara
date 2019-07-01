import React, { Component } from "react";
import CalculatorContainer from "./CalculatorContainer";
class Calculator extends Component {
  state = {
    number: {
      firstNumber: 0,
      secondNumber: 0
    },
    operator: "+"
  };

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  handleChange = event => {
    const { value, name } = event.target;
    let { number } = this.state;
    number[name] = parseInt(value);
    this.setState({ number });
  };

  handleOperatorChange = value => {
    let { operator } = this.state;
    operator = value;
    this.setState({ operator });
  };

  getResult = (firstNumber, operator, secondNumber) => {
    switch (operator) {
      case "+":
        return firstNumber + secondNumber;
      case "-":
        return firstNumber - secondNumber;
      case "*":
        return firstNumber * secondNumber;
      default:
        return firstNumber / secondNumber;
    }
  };

  render() {
    const { firstNumber, secondNumber } = this.state.number;
    const { operator } = this.state;
    const { handleOperatorChange } = this;
    return (
      <div>
        <h1>Calculator Sederhana</h1>
        <div>
          <input
            name="firstNumber"
            onChange={this.handleChange}
            defaultValue={firstNumber}
            type="number"
          />
          {operator}
          <input
            name="secondNumber"
            onChange={this.handleChange}
            defaultValue={secondNumber}
            type="number"
          />
          =
          <input
            value={this.getResult(firstNumber, operator, secondNumber)}
            disabled
          />
        </div>
        <CalculatorContainer onOperatorChange={handleOperatorChange} />
      </div>
    );
  }
}

export default Calculator;
